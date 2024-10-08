import { Module } from '@nestjs/common';
import { InvestmentsController } from './investments.controller';
import { InvestmentsService } from './investments.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvestmentsEntity } from './entity/investments.entity';
import { InvestmentTypesEntity } from './entity/types.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([InvestmentsEntity, InvestmentTypesEntity]),
  ],
  controllers: [InvestmentsController],
  providers: [InvestmentsService],
})
export class InvestmentsModule {}
