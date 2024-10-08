import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiResponse } from 'src/types';
import { CreateInvestmentDto } from './dto/create-investment.dto';
import { InvestmentTypesEntity } from './entity/types.entity';
import { InvestmentsEntity } from './entity/investments.entity';

@Injectable()
export class InvestmentsService {
  constructor(
    @InjectRepository(InvestmentsEntity)
    private investmentsRepository: Repository<InvestmentsEntity>,

    @InjectRepository(InvestmentTypesEntity)
    private typesRepository: Repository<InvestmentTypesEntity>,
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

  async onModuleInit() {
    const types = await this.typesRepository.find();

    if (!types.length) {
      await this.typesRepository.save([
        { name: 'Ações' },
        { name: 'Fundos Imobiliários (FIIs)' },
        { name: 'Títulos Públicos' },
        { name: 'CDBs (Certificado de Depósito Bancário)' },
        { name: 'Debêntures' },
        { name: 'Fundos de Investimento' },
        { name: 'Tesouro Direto' },
        { name: 'Criptomoedas' },
        { name: 'Fundos Multimercados' },
        { name: 'Ouro' },
        { name: 'Previdência Privada' },
        { name: 'LCIs (Letras de Crédito Imobiliário)' },
        { name: 'LCAs (Letras de Crédito do Agronegócio)' },
        { name: 'ETFs (Exchange Traded Funds)' },
        { name: 'COEs (Certificados de Operações Estruturadas)' },
        { name: 'Fundos de Venture Capital' },
        { name: 'Private Equity' },
        { name: 'Commodities' },
        { name: 'Fundo de Ações Internacionais' },
        { name: 'Peer-to-Peer Lending (P2P)' },
      ]);
    }
  }

  async getTypes(): Promise<ApiResponse<InvestmentTypesEntity>> {
    const [data, totalItems] = await this.typesRepository.findAndCount();

    return {
      data,
      totalItems,
    };
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
