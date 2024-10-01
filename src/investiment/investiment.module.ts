import { Module } from '@nestjs/common';
import { InvestmentsController } from './investment.controller';
import { InvestmentsService } from './investment.service';
import { InvestmentsRepositoryModule } from './investment.repository.module';

@Module({
  imports: [InvestmentsRepositoryModule],
  controllers: [InvestmentsController],
  providers: [InvestmentsService],
})
export class InvestmentModule {}
