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
    private entriesRepository: Repository<EntriesEntity>,
  ) {}

  async create(body: CreateEntriesDto, userId: string): Promise<EntriesEntity> {
    const entrie = this.entriesRepository.create({ ...body, userId });

    return await this.entriesRepository.save(entrie);
  }

  async get(userId: string): Promise<ApiResponse<EntriesEntity>> {
    const [data, totalItems] = await this.entriesRepository.findAndCount({
      where: { userId },
    });

    return {
      data,
      totalItems,
    };
  }

  async getTotal(userId: string) {
    const entries = await this.entriesRepository.find({
      where: {
        userId,
      },
    });

    const total = entries.reduce(
      (acc, entrie) => acc + Number(entrie.value),
      0,
    );

    return {
      total,
    };
  }

  async delete(id: string): Promise<DeleteResult> {
    return await this.entriesRepository.delete(id);
  }

  async update(body: CreateEntriesDto, id: string): Promise<EntriesEntity> {
    const entrie = await this.entriesRepository.preload({
      id: id,
      ...body,
    });

    return await this.entriesRepository.save(entrie);
  }
}
