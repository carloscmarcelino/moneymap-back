import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('investment_types')
export class InvestmentTypesEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100, unique: true })
  name: string;
}
