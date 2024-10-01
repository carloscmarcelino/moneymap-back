import { Module } from '@nestjs/common';
import { ExpenseRepositoryModule } from './expense.repository.module';
import { ExpenseController } from './expense.controller';
import { ExpenseService } from './expense.service';

@Module({
  imports: [ExpenseRepositoryModule],
  controllers: [ExpenseController],
  providers: [ExpenseService],
})
export class ExpenseModule {}
