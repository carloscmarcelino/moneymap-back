import { Controller, Get } from '@nestjs/common';
import { Bank } from './types';
import { BankService } from './bank.service';

@Controller('bank')
export class BankController {
  constructor(private readonly banksService: BankService) {}

  @Get()
  async get(): Promise<Bank[]> {
    return this.banksService.get();
  }
}
