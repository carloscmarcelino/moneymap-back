import { Repository } from 'typeorm';
import { PaymentMethodsEntity } from './payment-methods.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PaymentMethodsService {
  constructor(
    @InjectRepository(PaymentMethodsEntity)
    private readonly paymentMethodsRepository: Repository<PaymentMethodsEntity>,
  ) {}

  async onModuleInit() {
    const existingPaymentMethods = await this.paymentMethodsRepository.find();

    console.log(existingPaymentMethods);

    if (!existingPaymentMethods.length) {
      await this.paymentMethodsRepository.save([
        { name: 'Cartão de crédito' },
        { name: 'Cartão de débito' },
        { name: 'PIX' },
      ]);
    }
  }

  async get() {
    const [data, totalItems] =
      await this.paymentMethodsRepository.findAndCount();

    return {
      data,
      totalItems,
    };
  }
}
