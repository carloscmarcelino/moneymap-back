import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EntriesEntity } from './entries.entity';
import { CreateEntriesDto } from './dto/CreateEntriesDto';
import { ApiResponse } from 'src/types';

@Injectable()
export class EntriesService {
  constructor(
    @InjectRepository(EntriesEntity)
    private entriesService: Repository<EntriesEntity>,
  ) {}

  async create(body: CreateEntriesDto): Promise<EntriesEntity> {
    const entrie = this.entriesService.create(body);

    return await this.entriesService.save(entrie);
  }

  async get(): Promise<ApiResponse<EntriesEntity>> {
    const [data, totalItems] = await this.entriesService.findAndCount();

    return {
      data,
      totalItems,
    };
  }
}
