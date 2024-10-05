import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateExitsDto {
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
