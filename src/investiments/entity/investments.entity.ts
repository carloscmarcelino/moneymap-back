import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { InvestmentTypesEntity } from './types.entity';

@Entity()
export class InvestmentsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  userId: string;

  @CreateDateColumn()
  date: Date;

  @ManyToOne(() => InvestmentTypesEntity)
  type: InvestmentTypesEntity;

  @Column('decimal')
  value: number;

  @Column('decimal')
  yield: number;

  @Column({ type: 'varchar', length: 100 })
  broker: string;
}
