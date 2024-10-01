import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { ExpensesDto } from './expenses.dto';
import { ExpensesEntity } from './expenses.entity';
import { ApiResponse } from 'src/types';

@Controller('expenses')
export class ExpensesController {
  constructor(private readonly expensesService: ExpensesService) {}

  @Get()
  async getAll(): Promise<ApiResponse<ExpensesEntity>> {
    return this.expensesService.get();
  }

  @Get(':idid')
  async getById(@Param('id') id: string): Promise<ExpensesEntity> {
    return this.expensesService.getById(id);
  }

  @Post()
  async create(@Body() expensesDto: ExpensesDto): Promise<ExpensesEntity> {
    return this.expensesService.create(expensesDto);
  }
}
