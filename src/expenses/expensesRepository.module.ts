import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExpensesEntity } from './expenses.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ExpensesEntity])],
  exports: [TypeOrmModule],
})
export class ExpensesRepositoryModule {}
