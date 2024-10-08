import {
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { InvestmentTypeDto } from './type.dto';
import { Type } from 'class-transformer';

export class CreateInvestmentDto {
  @ValidateNested()
  @Type(() => InvestmentTypeDto)
  @IsNotEmpty()
  type: InvestmentTypeDto;

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
