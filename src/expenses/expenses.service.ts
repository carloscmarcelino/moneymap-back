import { Injectable } from '@nestjs/common';
import { ExpensesDto } from './expenses.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ExpensesEntity } from './expenses.entity';
import { Repository } from 'typeorm';
import { ApiResponse } from 'src/types';

@Injectable()
export class ExpensesService {
  constructor(
    @InjectRepository(ExpensesEntity)
    private expensesRepository: Repository<ExpensesEntity>,
  ) {}

  async get(): Promise<ApiResponse<ExpensesEntity>> {
    const [data, totalItems] = await this.expensesRepository.findAndCount();

    return {
      data,
      totalItems,
    };
  }

  async create(expensesDto: ExpensesDto): Promise<ExpensesEntity> {
    const expense = this.expensesRepository.create(expensesDto);

    return this.expensesRepository.save(expense);
  }
}
