import { Module } from '@nestjs/common';
import { ExitsController } from './exits.controller';
import { ExitsService } from './exits.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExitsEntity } from './exits.entity';
import { PaymentMethodsEntity } from 'src/payment-methods/payment-methods.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ExitsEntity, PaymentMethodsEntity])],
  controllers: [ExitsController],
  providers: [ExitsService],
})
export class ExitsModule {}
