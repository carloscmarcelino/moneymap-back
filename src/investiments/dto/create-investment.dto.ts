import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateInvestmentDto {
  @IsString()
  @IsNotEmpty()
  type: string;

  @IsNumber()
  @IsNotEmpty()
  value: number;

  @IsNumber()
  @IsNotEmpty()
  yield: number;

  @IsString()
  @IsNotEmpty()
  broker: string;
}
