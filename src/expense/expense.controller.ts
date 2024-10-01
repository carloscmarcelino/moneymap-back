import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiResponse } from 'src/types';
import { ExpenseService } from './expense.service';
import { ExpenseEntity } from './expense.entity';
import { ExpenseDto } from './expense.dto';

@Controller('expense')
export class ExpenseController {
  constructor(private readonly expensesService: ExpenseService) {}

  @Get()
  async getAll(): Promise<ApiResponse<ExpenseEntity>> {
    return this.expensesService.get();
  }

  @Get(':idid')
  async getById(@Param('id') id: string): Promise<ExpenseEntity> {
    return this.expensesService.getById(id);
  }

  @Post()
  async create(@Body() body: ExpenseDto): Promise<ExpenseEntity> {
    return this.expensesService.create(body);
  }

  @Patch(':id')
  async update(@Body() body: ExpenseDto, @Param('id') id: string) {
    return this.expensesService.update(body, id);
  }
}
