import { Body, Controller, Post } from '@nestjs/common';
import { EntriesService } from './entries.service';
import { CreateEntriesDto } from './dto/CreateEntriesDto';
import { EntriesEntity } from './entries.entity';

@Controller('entries')
export class EntriesController {
  constructor(private readonly entriesService: EntriesService) {}

  @Post()
  createEntries(@Body() body: CreateEntriesDto): Promise<EntriesEntity> {
    return this.entriesService.create(body);
  }
}
