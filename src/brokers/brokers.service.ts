import axios from 'axios';
import { Broker } from './types';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BrokersService {
  async get(): Promise<Broker[]> {
    const { data } = await axios.get<Broker[]>(
      'https://brasilapi.com.br/api/cvm/corretoras/v1',
    );

    return data;
  }
}
