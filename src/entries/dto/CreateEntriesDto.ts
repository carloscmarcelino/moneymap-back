import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateEntriesDto {
  @IsNumber()
  value: number;

  @IsString()
  description: string;

  @IsDate()
  @IsOptional()
  date: Date;
}
