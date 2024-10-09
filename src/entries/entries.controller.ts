import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { EntriesService } from './entries.service';
import { CreateEntriesDto } from './dto/CreateEntriesDto';
import { EntriesEntity } from './entries.entity';
import { ApiResponse, AuthenticatedRequest } from 'src/types';
import { DeleteResult } from 'typeorm';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';

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
  get(@Req() req: AuthenticatedRequest): Promise<ApiResponse<EntriesEntity>> {
    const userId = req.user.id;

    return this.entriesService.get(userId);
  }

  @Get('total')
  getTotal(@Req() req: AuthenticatedRequest) {
    const userId = req.user.id;

    return this.entriesService.getTotal(userId);
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
