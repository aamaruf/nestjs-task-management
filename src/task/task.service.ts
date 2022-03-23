import { Injectable } from '@nestjs/common';
import { Task, taskStatus } from './task.model';
import { v4 as uuidV4 } from 'uuid';

@Injectable()
export class TaskService {
  private tasks: Task[] = [];

  getAllTask(): Task[] {
    return this.tasks;
  }

  createTask(data): Task {
    const task: Task = {
      id: uuidV4(),
      title: data.title,
      description: data.description,
      status: taskStatus.Pending,
    };
    this.tasks.push(task);
    return task;
  }
}
