import { EntityRepository, Repository } from 'typeorm';
import { Task } from '../entities/tasks.entity';

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {}
