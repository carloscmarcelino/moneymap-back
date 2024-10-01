import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ExpenseDto {
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @IsString()
  @IsNotEmpty()
  paymentMethod: string;
}
