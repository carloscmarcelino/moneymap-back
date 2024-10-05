import { Module } from '@nestjs/common';
import { ExitsController } from './exits.controller';
import { ExitsService } from './exits.service';

@Module({
  imports: [ExitsModule],
  controllers: [ExitsController],
  providers: [ExitsService],
})
export class ExitsModule {}
