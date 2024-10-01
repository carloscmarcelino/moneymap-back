import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class InvestmentsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column('decimal')
  value: number;
}
