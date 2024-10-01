import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ExpensesDto {
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
