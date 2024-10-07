import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { EntriesEntity } from './entries.entity';
import { CreateEntriesDto } from './dto/CreateEntriesDto';
import { ApiResponse } from 'src/types';

@Injectable()
export class EntriesService {
  constructor(
    @InjectRepository(EntriesEntity)
    private entriesService: Repository<EntriesEntity>,
  ) {}

  async create(body: CreateEntriesDto, userId: string): Promise<EntriesEntity> {
    const entrie = this.entriesService.create({ ...body, userId });

    return await this.entriesService.save(entrie);
  }

  async get(userId: string): Promise<ApiResponse<EntriesEntity>> {
    const [data, totalItems] = await this.entriesService.findAndCount({
      where: { userId },
    });

    return {
      data,
      totalItems,
    };
  }

  async delete(id: string): Promise<DeleteResult> {
    return await this.entriesService.delete(id);
  }

  async update(body: CreateEntriesDto, id: string): Promise<EntriesEntity> {
    const entrie = await this.entriesService.preload({
      id: id,
      ...body,
    });

    return await this.entriesService.save(entrie);
  }
}
