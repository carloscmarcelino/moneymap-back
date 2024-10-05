import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExitsEntity } from './exits.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ExitsEntity])],
  exports: [TypeOrmModule],
})
export class ExitsRepository {}
