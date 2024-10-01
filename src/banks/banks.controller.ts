import { Controller, Get } from '@nestjs/common';
import { BanksService } from './banks.service';
import { Bank } from './types';

@Controller('banks')
export class BanksController {
  constructor(private readonly banksService: BanksService) {}

  @Get()
  async get(): Promise<Bank[]> {
    return this.banksService.get();
  }
}
