import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntriesEntity } from './entries.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EntriesEntity])],
  exports: [TypeOrmModule],
})
export class EntriesRepository {}
