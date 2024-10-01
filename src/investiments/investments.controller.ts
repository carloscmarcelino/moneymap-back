import { Body, Controller, Post } from '@nestjs/common';
import { CreateInvestmentsDto } from './dto/investments.dto';
import { InvestmentsService } from './investments.service';
import { InvestmentsEntity } from './investments.entity';

@Controller('investiments')
export class InvestmentsController {
  constructor(private readonly investimentsService: InvestmentsService) {}

  @Post()
  async create(
    @Body() createInvestimentsDto: CreateInvestmentsDto,
  ): Promise<InvestmentsEntity> {
    return this.investimentsService.create(createInvestimentsDto);
  }
}
