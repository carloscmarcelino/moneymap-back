import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class ExitsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  date: Date;

  @Column({ type: 'varchar', length: 100 })
  description: string;

  @Column('decimal')
  amount: number;

  @Column({ type: 'varchar', length: 50 })
  paymentMethod: string;
}
