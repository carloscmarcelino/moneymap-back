import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
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
  async create(@Body() expenseDto: ExpensesDto): Promise<ExpensesEntity> {
    return this.expensesService.create(expenseDto);
  }

  @Patch(':id')
  async update(@Body() body: ExpensesDto, @Param('id') id: string) {
    return this.expensesService.update(body, id);
  }
}
