import { Controller, Get } from '@nestjs/common';
import { Bank } from './types';
import { BanksService } from './banks.service';

@Controller('banks')
export class BanksController {
  constructor(private readonly banksService: BanksService) {}

  @Get()
  async get(): Promise<Bank[]> {
    return this.banksService.get();
  }
}
