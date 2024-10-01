import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateInvestmentsDto } from './dto/investments.dto';
import { ApiResponse } from 'src/types';
import { InvestmentEntity } from './investment.entity';
import { InvestmentsService } from './investment.service';

@Controller('investment')
export class InvestmentsController {
  constructor(private readonly investimentsService: InvestmentsService) {}

  @Get()
  async get(): Promise<ApiResponse<InvestmentEntity>> {
    return this.investimentsService.get();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<InvestmentEntity> {
    return this.investimentsService.getById(id);
  }

  @Post()
  async create(@Body() body: CreateInvestmentsDto): Promise<InvestmentEntity> {
    return this.investimentsService.create(body);
  }

  @Patch(':id')
  update(
    @Body() body: CreateInvestmentsDto,
    @Param('id') id: string,
  ): Promise<InvestmentEntity> {
    return this.investimentsService.update(body, id);
  }
}
