import axios from 'axios';
import { Bank } from './types';

export class BanksService {
  async get(): Promise<Bank[]> {
    const { data } = await axios.get<Bank[]>(
      'https://brasilapi.com.br/api/banks/v1',
    );

    return data;
  }
}
