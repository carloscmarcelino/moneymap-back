import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InvestmentsModule } from './investiments/investiments.module';
import { DatabaseModule } from './database/database.module';
import { BanksModule } from './banks/banks.module';
import { BrokersModule } from './brokers/brokers.module';

@Module({
  imports: [DatabaseModule, InvestmentsModule, BanksModule, BrokersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
