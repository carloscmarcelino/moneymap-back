import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateInvestmentsDto } from './dto/investments.dto';
import { InvestmentsService } from './investments.service';
import { InvestmentsEntity } from './investments.entity';
import { ApiResponse } from 'src/types';

@Controller('investments')
export class InvestmentsController {
  constructor(private readonly investimentsService: InvestmentsService) {}

  @Get()
  async get(): Promise<ApiResponse<InvestmentsEntity>> {
    return this.investimentsService.get();
  }

  @Post()
  async create(
    @Body() createInvestimentsDto: CreateInvestmentsDto,
  ): Promise<InvestmentsEntity> {
    return this.investimentsService.create(createInvestimentsDto);
  }
}
