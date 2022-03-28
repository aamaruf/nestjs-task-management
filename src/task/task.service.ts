import { Injectable, Query } from '@nestjs/common';
import { v4 as uuidV4 } from 'uuid';
import { CreateTaskDTO } from './dto/createTask.dto';
import { GetTaskFilterDTO } from './dto/getTaskFilter.dto';
import { UpdateTaskDTO } from './dto/updateTask.dto';
import { Task, taskStatus } from './task.model';

@Injectable()
export class TaskService {
  private tasks: Task[] = [];

  getTaskById(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }

  getAllTask(): Task[] {
    return this.tasks;
  }

  getTasksWithFilter(@Query() filters: GetTaskFilterDTO) {
    //
  }

  createTask(data: CreateTaskDTO): Task {
    const task: Task = {
      id: uuidV4(),
      title: data.title,
      description: data.description,
      status: taskStatus.Pending,
    };
    this.tasks.push(task);
    return task;
  }

  updateTask(id: string, data: UpdateTaskDTO): Task {
    const task = this.getTaskById(id);
    task.title = data?.title;
    task.description = data?.description;
    return task;
  }

  deleteTaskById(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  updateTaskStatus(id: string, status: taskStatus) {
    const task = this.getTaskById(id);
    task.status = status;
    return task;
  }
}
