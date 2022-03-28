import { taskStatus } from '../task.model';

export class GetTaskFilterDTO {
  searchTerm?: string;
  status?: taskStatus;
}
