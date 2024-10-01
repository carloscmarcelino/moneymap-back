import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class InvestmentsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column('decimal')
  value: number;

  @CreateDateColumn()
  created_at: string;
}
