import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateEntriesDto {
  @IsNumber()
  value: number;

  @IsString()
  description: string;

  @IsString()
  @IsOptional()
  date: string;
}
