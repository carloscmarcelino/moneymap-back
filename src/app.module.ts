import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { EntriesModule } from './entries/entries.module';
import { BrokersModule } from './brokers/brokers.module';
import { BankSModule } from './banks/banks.module';
import { InvestmentsModule } from './investiments/investiments.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    DatabaseModule,
    InvestmentsModule,
    BankSModule,
    BrokersModule,
    UsersModule,
    EntriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
