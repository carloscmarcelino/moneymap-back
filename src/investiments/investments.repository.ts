import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvestmentsEntity } from './investments.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InvestmentsEntity])],
  exports: [TypeOrmModule],
})
export class InvestmentsRepository {}
