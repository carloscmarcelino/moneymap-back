import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExpenseEntity } from './expense.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ExpenseEntity])],
  exports: [TypeOrmModule],
})
export class ExpenseRepositoryModule {}