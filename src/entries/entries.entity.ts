import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class EntriesEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('decimal')
  value: number;

  @Column({ type: 'varchar', length: 100 })
  description: string;

  @CreateDateColumn()
  date: Date;
}
