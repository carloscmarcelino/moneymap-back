import { Injectable } from '@nestjs/common';
import { CreateInvestmentsDto } from './dto/investments.dto';

@Injectable()
export class InvestmentsService {
  create(createInvestimentsDto: CreateInvestmentsDto) {
    return {
      message: 'Investiments created succesfully',
      data: createInvestimentsDto,
    };
  }
}
