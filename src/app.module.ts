import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { BankModule } from './bank/bank.module';
import { BrokerModule } from './broker/broker.module';
import { ExpenseModule } from './expense/expense.module';
import { InvestmentModule } from './investiment/investiment.module';

@Module({
  imports: [
    DatabaseModule,
    InvestmentModule,
    BankModule,
    BrokerModule,
    ExpenseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
