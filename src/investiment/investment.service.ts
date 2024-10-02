import { Injectable } from '@nestjs/common';
import { CreateInvestmentsDto } from './dto/investments.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiResponse } from 'src/types';
import { InvestmentEntity } from './investment.entity';

@Injectable()
export class InvestmentsService {
  constructor(
    @InjectRepository(InvestmentEntity)
    private investmentsRepository: Repository<InvestmentEntity>,
  ) {}

  async get(): Promise<ApiResponse<InvestmentEntity>> {
    const [data, totalItems] = await this.investmentsRepository.findAndCount();

    return {
      data,
      totalItems,
    };
  }

  async getById(id: string): Promise<InvestmentEntity> {
    return await this.investmentsRepository.findOneBy({ id });
  }

  async create(body: CreateInvestmentsDto): Promise<InvestmentEntity> {
    const investment = this.investmentsRepository.create(body);

    return await this.investmentsRepository.save(investment);
  }

  async update(
    body: CreateInvestmentsDto,
    id: string,
  ): Promise<InvestmentEntity> {
    const investment = await this.investmentsRepository.preload({
      id,
      ...body,
    });

    return investment;
  }

  async delete(id: string) {
    const expense = await this.investmentsRepository.findOneBy({ id });

    await this.investmentsRepository.remove(expense);

    return expense;
  }
}
