import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InvestmentsModule } from './investiments/investiments.module';

@Module({
  imports: [InvestmentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
