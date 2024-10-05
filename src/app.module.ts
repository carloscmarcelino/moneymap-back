import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { BankModule } from './bank/bank.module';
import { BrokerModule } from './broker/broker.module';
import { ExpenseModule } from './expense/expense.module';
import { InvestmentModule } from './investiment/investiment.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { EntriesModule } from './entries/entries.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    DatabaseModule,
    InvestmentModule,
    BankModule,
    BrokerModule,
    ExpenseModule,
    UsersModule,
    EntriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
