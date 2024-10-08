import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateExitsDto {
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @IsString()
  @IsNotEmpty()
  paymentMethodId: string;

  @IsOptional()
  @IsString()
  date: string;
}
