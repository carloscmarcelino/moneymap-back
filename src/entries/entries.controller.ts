import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { EntriesService } from './entries.service';
import { CreateEntriesDto } from './dto/CreateEntriesDto';
import { EntriesEntity } from './entries.entity';
import { ApiResponse, AuthenticatedRequest } from 'src/types';
import { DeleteResult } from 'typeorm';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';
import * as XLSX from 'xlsx';
import { Response } from 'express';

@Controller('entries')
@UseGuards(JwtAuthGuard)
export class EntriesController {
  constructor(private readonly entriesService: EntriesService) {}

  @Post()
  create(
    @Body() body: CreateEntriesDto,
    @Req() req: AuthenticatedRequest,
  ): Promise<EntriesEntity> {
    const userId = req.user.id;

    return this.entriesService.create(body, userId);
  }

  @Get()
  get(
    @Req() req: AuthenticatedRequest,
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 25,
    @Query('search') search: string,
  ): Promise<ApiResponse<EntriesEntity>> {
    const userId = req.user.id;

    return this.entriesService.get(
      userId,
      startDate,
      endDate,
      page,
      limit,
      search,
    );
  }

  @Get('total')
  getTotal(
    @Req() req: AuthenticatedRequest,
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ) {
    const userId = req.user.id;

    return this.entriesService.getTotal(userId, startDate, endDate);
  }

  @Get('export')
  async exportXlsx(
    @Req() req: AuthenticatedRequest,
    @Res() res: Response,
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
    @Query('search') search: string,
  ) {
    const userId = req.user.id;

    const { data } = await this.entriesService.get(
      userId,
      startDate,
      endDate,
      1,
      1000,
      search,
    );

    if (!data?.length) {
      return res.status(204).send();
    }

    const worksheetData = data.map((entry) => ({
      ID: entry.id,
      UserID: entry.userId,
      Valor: entry.value,
      Descrição: entry.description,
      Data: entry.date.toISOString(),
    }));

    const worksheet = XLSX.utils.json_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Entradas');

    const buffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });

    res.send(buffer);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<DeleteResult> {
    return this.entriesService.delete(id);
  }

  @Patch(':id')
  update(
    @Body() body: CreateEntriesDto,
    @Param('id') id: string,
  ): Promise<EntriesEntity> {
    return this.entriesService.update(body, id);
  }
}
