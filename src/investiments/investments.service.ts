import { Injectable } from '@nestjs/common';
import { CreateInvestmentsDto } from './dto/investments.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { InvestmentsEntity } from './investments.entity';
import { Repository } from 'typeorm';
import { ApiResponse } from 'src/types';

@Injectable()
export class InvestmentsService {
  constructor(
    @InjectRepository(InvestmentsEntity)
    private investmentsRepository: Repository<InvestmentsEntity>,
  ) {}

  async get(): Promise<ApiResponse<InvestmentsEntity>> {
    const [data, totalItems] = await this.investmentsRepository.findAndCount();

    return {
      data,
      totalItems,
    };
  }

  async getById(id: string): Promise<InvestmentsEntity> {
    return await this.investmentsRepository.findOneBy({ id });
  }

  async create(
    createInvestmentsDto: CreateInvestmentsDto,
  ): Promise<InvestmentsEntity> {
    const investment = this.investmentsRepository.create(createInvestmentsDto);

    return await this.investmentsRepository.save(investment);
  }

  async update(
    body: CreateInvestmentsDto,
    id: string,
  ): Promise<InvestmentsEntity> {
    const investment = await this.investmentsRepository.preload({
      id,
      ...body,
    });

    return investment;
  }
}
