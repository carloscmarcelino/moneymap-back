import { IsDate, IsNumber, IsOptional } from 'class-validator';

export class CreateEntriesDto {
  @IsNumber()
  value: number;

  @IsDate()
  @IsOptional()
  date: Date;
}
