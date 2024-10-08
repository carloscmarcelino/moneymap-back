import { Controller, Get } from '@nestjs/common';
import { Broker } from './types';
import { BrokersService } from './brokers.service';
import { ApiResponse } from 'src/types';

@Controller('broker')
export class BrokersController {
  constructor(private readonly brokersService: BrokersService) {}

  @Get()
  async get(): Promise<ApiResponse<Broker>> {
    return this.brokersService.get();
  }
}
