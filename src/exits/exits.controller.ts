import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiResponse } from 'src/types';
import { ExitsService } from './exits.service';
import { ExitsEntity } from './exits.entity';
import { CreateExitsDto } from './dto/create-exits.dto';

@Controller('exits')
export class ExitsController {
  constructor(private readonly expensesService: ExitsService) {}

  @Get()
  getAllExits(): Promise<ApiResponse<ExitsEntity>> {
    return this.expensesService.get();
  }

  @Get(':id')
  getExitById(@Param('id') id: string): Promise<ExitsEntity> {
    return this.expensesService.getById(id);
  }

  @Post()
  createExit(@Body() body: CreateExitsDto): Promise<ExitsEntity> {
    return this.expensesService.create(body);
  }

  @Patch(':id')
  updateExitById(@Body() body: CreateExitsDto, @Param('id') id: string) {
    return this.expensesService.update(body, id);
  }

  @Delete(':id')
  deleteExitById(@Param('id') id: string) {
    return this.expensesService.delete(id);
  }
}
