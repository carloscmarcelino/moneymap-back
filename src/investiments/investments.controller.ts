import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiResponse } from 'src/types';
import { InvestmentsService } from './investments.service';
import { InvestmentsEntity } from './investments.entity';
import { CreateInvestmentDto } from './dto/create-investment.dto';

@Controller('investment')
export class InvestmentsController {
  constructor(private readonly investimentsService: InvestmentsService) {}

  @Get()
  get(): Promise<ApiResponse<InvestmentsEntity>> {
    return this.investimentsService.get();
  }

  @Get(':id')
  getById(@Param('id') id: string): Promise<InvestmentsEntity> {
    return this.investimentsService.getById(id);
  }

  @Post()
  create(@Body() body: CreateInvestmentDto): Promise<InvestmentsEntity> {
    return this.investimentsService.create(body);
  }

  @Patch(':id')
  update(
    @Body() body: CreateInvestmentDto,
    @Param('id') id: string,
  ): Promise<InvestmentsEntity> {
    return this.investimentsService.update(body, id);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.investimentsService.delete(id);
  }
}
