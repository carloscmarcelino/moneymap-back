import { ExitsEntity } from 'src/exits/exits.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PaymentMethodsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 50, unique: true })
  name: string;

  @OneToMany(() => ExitsEntity, (exit) => exit.paymentMethod)
  exits: ExitsEntity[];
}
