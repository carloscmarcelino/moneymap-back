import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class InvestmentsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('decimal')
  value: number;
}
