import { Module } from '@nestjs/common';
import { InvestmentsRepository } from './investments.repository';
import { InvestmentsController } from './investments.controller';
import { InvestmentsService } from './investments.service';

@Module({
  imports: [InvestmentsRepository],
  controllers: [InvestmentsController],
  providers: [InvestmentsService],
})
export class InvestmentsModule {}
