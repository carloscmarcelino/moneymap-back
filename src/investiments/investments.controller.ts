import { Body, Controller, Post } from '@nestjs/common';
import { CreateInvestmentsDto } from './dto/investments.dto';
import { InvestmentsService } from './investments.service';

@Controller('investiments')
export class InvestmentsController {
  constructor(private readonly investimentsService: InvestmentsService) {}

  @Post()
  create(@Body() createInvestimentsDto: CreateInvestmentsDto) {
    this.investimentsService.create(createInvestimentsDto);
  }
}
