import axios from 'axios';
import { Broker } from './types';
import { Injectable } from '@nestjs/common';
import { ApiResponse } from 'src/types';

@Injectable()
export class BrokersService {
  async get(): Promise<ApiResponse<Broker>> {
    const { data } = await axios.get<Broker[]>(
      'https://brasilapi.com.br/api/cvm/corretoras/v1',
    );

    const activeBrokers = data.filter(
      (broker) => broker.status !== 'CANCELADA',
    );

    return {
      data: activeBrokers,
      totalItems: activeBrokers.length,
    };
  }
}
