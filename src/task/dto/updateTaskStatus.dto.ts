import { IsEnum, IsNotEmpty } from 'class-validator';
import { taskStatus } from '../task.model';
export class UpdateTaskStatusDTO {
  @IsNotEmpty()
  @IsEnum(taskStatus)
  status?: taskStatus;
}
