import { Module } from '@nestjs/common';
import { EntriesController } from './entries.controller';
import { EntriesService } from './entries.service';
import { EntriesEntity } from './entries.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([EntriesEntity])],
  controllers: [EntriesController],
  providers: [EntriesService],
})
export class EntriesModule {}
