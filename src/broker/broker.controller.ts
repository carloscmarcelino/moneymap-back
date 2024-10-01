import { Controller, Get } from '@nestjs/common';
import { Broker } from './types';
import { BrokerService } from './broker.service';

@Controller('broker')
export class BrokerController {
  constructor(private readonly brokersService: BrokerService) {}

  @Get()
  async get(): Promise<Broker[]> {
    return this.brokersService.get();
  }
}
