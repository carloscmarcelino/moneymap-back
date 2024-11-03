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

  async get(
    userId: string,
    startDate: string,
    endDate: string,
    page: number,
    limit: number,
  ): Promise<ApiResponse<EntriesEntity>> {
    const query = this.entriesRepository
      .createQueryBuilder('entry')
      .where('entry.userId = :userId', { userId });

    if (startDate) {
      query.andWhere('entry.date >= :startDate', { startDate });
    }

    if (endDate) {
      query.andWhere('entry.date <= :endDate', { endDate });
    }

    query.take(limit);
    query.skip((page - 1) * limit);

    const [data, totalItems] = await query.getManyAndCount();

    return {
      data,
      totalItems,
    };
  }

  async getTotal(userId: string, startDate: string, endDate: string) {
    const query = this.entriesRepository
      .createQueryBuilder('entry')
      .select('SUM(entry.value)', 'total')
      .where('entry.userId = :userId', { userId });

    if (startDate) {
      query.andWhere('entry.date >= :startDate', { startDate });
    }

    if (endDate) {
      query.andWhere('entry.date <= :endDate', { endDate });
    }

    const result = await query.getRawOne();

    return {
      total: result ? Number(result.total) : 0,
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
