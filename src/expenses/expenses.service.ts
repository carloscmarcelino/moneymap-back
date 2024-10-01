import { Injectable } from '@nestjs/common';
import { ExpensesDto } from './expenses.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ExpensesEntity } from './expenses.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ExpensesService {
  constructor(
    @InjectRepository(ExpensesEntity)
    private expensesRepository: Repository<ExpensesEntity>,
  ) {}

  async create(expensesDto: ExpensesDto): Promise<ExpensesEntity> {
    const expense = this.expensesRepository.create(expensesDto);

    return this.expensesRepository.save(expense);
  }
}
