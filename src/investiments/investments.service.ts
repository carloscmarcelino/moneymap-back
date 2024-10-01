import { Injectable } from '@nestjs/common';
import { CreateInvestmentsDto } from './dto/investments.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { InvestmentsEntity } from './investments.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InvestmentsService {
  constructor(
    @InjectRepository(InvestmentsEntity)
    private investmentsRepository: Repository<InvestmentsEntity>,
  ) {}

  async create(
    createInvestmentsDto: CreateInvestmentsDto,
  ): Promise<InvestmentsEntity> {
    const investment = this.investmentsRepository.create(createInvestmentsDto);

    return this.investmentsRepository.save(investment);
  }
}
