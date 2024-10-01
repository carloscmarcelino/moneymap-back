import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class InvestmentsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  date: Date;

  @Column({ type: 'varchar', length: 50 })
  type: string;

  @Column('decimal')
  value: number;

  @Column('decimal')
  yield: number;

  @Column({ type: 'varchar', length: 100 })
  bank: string;
}
