import { Body, Controller, Get, Post } from '@nestjs/common';
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

  @Post()
  async create(@Body() expensesDto: ExpensesDto): Promise<ExpensesEntity> {
    return this.expensesService.create(expensesDto);
  }
}
