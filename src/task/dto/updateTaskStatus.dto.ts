import { IsEnum, IsNotEmpty } from 'class-validator';
import { taskStatus } from '../task.enum';
export class UpdateTaskStatusDTO {
  @IsNotEmpty()
  @IsEnum(taskStatus)
  status?: taskStatus;
}
