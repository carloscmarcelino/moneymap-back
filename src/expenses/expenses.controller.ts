import { Body, Controller, Post } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { ExpensesDto } from './expenses.dto';
import { ExpensesEntity } from './expenses.entity';

@Controller('expenses')
export class ExpensesController {
  constructor(private readonly expensesService: ExpensesService) {}

  @Post()
  async create(@Body() expensesDto: ExpensesDto): Promise<ExpensesEntity> {
    return this.expensesService.create(expensesDto);
  }
}
