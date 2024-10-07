import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiResponse } from 'src/types';
import { CreateInvestmentDto } from './dto/create-investment.dto';
import { InvestmentsEntity } from './investments.entity';

@Injectable()
export class InvestmentsService {
  constructor(
    @InjectRepository(InvestmentsEntity)
    private investmentsRepository: Repository<InvestmentsEntity>,
  ) {}

  async get(userId: string): Promise<ApiResponse<InvestmentsEntity>> {
    const [data, totalItems] = await this.investmentsRepository.findAndCount({
      where: { userId },
    });

    return {
      data,
      totalItems,
    };
  }

  async getById(id: string): Promise<InvestmentsEntity> {
    return await this.investmentsRepository.findOneBy({ id });
  }

  async create(
    body: CreateInvestmentDto,
    userId: string,
  ): Promise<InvestmentsEntity> {
    const investment = this.investmentsRepository.create({ ...body, userId });

    return await this.investmentsRepository.save(investment);
  }

  async update(
    body: CreateInvestmentDto,
    id: string,
  ): Promise<InvestmentsEntity> {
    const investment = await this.investmentsRepository.preload({
      id,
      ...body,
    });

    return this.investmentsRepository.save(investment);
  }

  async delete(id: string) {
    const expense = await this.investmentsRepository.findOneBy({ id });

    await this.investmentsRepository.remove(expense);

    return expense;
  }
}
