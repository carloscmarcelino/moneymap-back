import { Module } from '@nestjs/common';
import { EntriesController } from './entries.controller';
import { EntriesRepository } from './entries.repository';
import { EntriesService } from './entries.service';

@Module({
  imports: [EntriesRepository],
  controllers: [EntriesController],
  providers: [EntriesService],
})
export class EntriesModule {}
