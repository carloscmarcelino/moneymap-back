import { PaymentMethodsEntity } from 'src/payment-methods/payment-methods.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class ExitsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  userId: string;

  @CreateDateColumn()
  date: Date;

  @Column({ type: 'varchar', length: 100 })
  description: string;

  @Column('decimal')
  amount: number;

  @ManyToOne(() => PaymentMethodsEntity, (paymentMethod) => paymentMethod.id)
  paymentMethod: PaymentMethodsEntity;
}
