import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiResponse } from 'src/types';
import { ExitsEntity } from './exits.entity';
import { CreateExitsDto } from './dto/create-exits.dto';
import { PaymentMethodsEntity } from 'src/payment-methods/payment-methods.entity';

@Injectable()
export class ExitsService {
  constructor(
    @InjectRepository(ExitsEntity)
    private expensesRepository: Repository<ExitsEntity>,

    @InjectRepository(PaymentMethodsEntity)
    private paymentMethodsRepository: Repository<PaymentMethodsEntity>,
  ) {}

  async get(userId: string): Promise<ApiResponse<ExitsEntity>> {
    const [data, totalItems] = await this.expensesRepository.findAndCount({
      where: { userId },
      relations: ['paymentMethod'],
    });

    return {
      data,
      totalItems,
    };
  }

  async getTotal(userId: string) {
    const exits = await this.expensesRepository.find({
      where: {
        userId,
      },
    });

    const total = exits.reduce((acc, exit) => acc + Number(exit.amount), 0);

    return { total };
  }

  async getById(id: string): Promise<ExitsEntity> {
    const data = await this.expensesRepository.findOneBy({ id });

    return data;
  }

  async create(body: CreateExitsDto, userId: string): Promise<ExitsEntity> {
    const paymentMethod = await this.paymentMethodsRepository.findOne({
      where: { id: body.paymentMethodId },
    });

    const expense = this.expensesRepository.create({
      ...body,
      userId,
      paymentMethod,
    });

    return await this.expensesRepository.save(expense);
  }

  async update(body: CreateExitsDto, id: string): Promise<ExitsEntity> {
    const expense = await this.expensesRepository.preload({
      id,
      ...body,
    });

    await this.expensesRepository.save(expense);

    return expense;
  }

  async delete(id: string) {
    const expense = await this.expensesRepository.findOneBy({ id });

    await this.expensesRepository.remove(expense);

    return expense;
  }
}
