import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { EntriesService } from './entries.service';
import { CreateEntriesDto } from './dto/CreateEntriesDto';
import { EntriesEntity } from './entries.entity';
import { ApiResponse } from 'src/types';

@Controller('entries')
export class EntriesController {
  constructor(private readonly entriesService: EntriesService) {}

  @Post()
  createEntries(@Body() body: CreateEntriesDto): Promise<EntriesEntity> {
    return this.entriesService.create(body);
  }

  @Get()
  getEntrie(): Promise<ApiResponse<EntriesEntity>> {
    return this.entriesService.get();
  }

  @Delete(':id')
  deleteEntrie(@Param('id') id: string) {
    return this.entriesService.delete(id);
  }
}
