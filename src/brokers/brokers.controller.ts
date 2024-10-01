import { Controller, Get } from '@nestjs/common';
import { Broker } from './types';
import { BrokersService } from './brokers.service';

@Controller('brokers')
export class BrokersController {
  constructor(private readonly brokersService: BrokersService) {}

  @Get()
  async get(): Promise<Broker[]> {
    return this.brokersService.get();
  }
}
