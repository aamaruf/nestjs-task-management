import { IsEnum, IsOptional, IsString } from 'class-validator';
import { taskStatus } from '../task.enum';

export class GetTaskFilterDTO {
  @IsOptional()
  @IsString()
  searchTerm?: string;

  @IsOptional()
  @IsEnum(taskStatus)
  status?: taskStatus;
}
