import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiResponse } from 'src/types';
import { ExpenseEntity } from './expense.entity';
import { ExpenseDto } from './expense.dto';

@Injectable()
export class ExpenseService {
  constructor(
    @InjectRepository(ExpenseEntity)
    private expensesRepository: Repository<ExpenseEntity>,
  ) {}

  async get(): Promise<ApiResponse<ExpenseEntity>> {
    const [data, totalItems] = await this.expensesRepository.findAndCount();

    return {
      data,
      totalItems,
    };
  }

  async getById(id: string): Promise<ExpenseEntity> {
    const data = await this.expensesRepository.findOneBy({ id });

    return data;
  }

  async create(body: ExpenseDto): Promise<ExpenseEntity> {
    const expense = this.expensesRepository.create(body);

    return await this.expensesRepository.save(expense);
  }

  async update(body: ExpenseDto, id: string): Promise<ExpenseEntity> {
    const expense = await this.expensesRepository.preload({
      id,
      ...body,
    });

    return expense;
  }
}
