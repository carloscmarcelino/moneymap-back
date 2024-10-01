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

  async getById(id: string): Promise<ExpensesEntity> {
    const data = await this.expensesRepository.findOneBy({ id });

    return data;
  }

  async create(expensesDto: ExpensesDto): Promise<ExpensesEntity> {
    const expense = this.expensesRepository.create(expensesDto);

    return await this.expensesRepository.save(expense);
  }

  async update(body: ExpensesDto, id: string): Promise<ExpensesEntity> {
    const expense = await this.expensesRepository.preload({
      id,
      ...body,
    });

    return expense;
  }
}
