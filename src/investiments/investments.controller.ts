import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
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

  @Get(':id')
  async getById(@Param('id') id: string): Promise<InvestmentsEntity> {
    return this.investimentsService.getById(id);
  }

  @Post()
  async create(
    @Body() createInvestimentsDto: CreateInvestmentsDto,
  ): Promise<InvestmentsEntity> {
    return this.investimentsService.create(createInvestimentsDto);
  }

  @Patch(':id')
  update(
    @Body() body: CreateInvestmentsDto,
    @Param('id') id: string,
  ): Promise<InvestmentsEntity> {
    return this.investimentsService.update(body, id);
  }
}
