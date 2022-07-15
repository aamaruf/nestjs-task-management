import { Injectable, NotFoundException, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDTO } from './dto/createTask.dto';
import { GetTaskFilterDTO } from './dto/getTaskFilter.dto';
import { UpdateTaskDTO } from './dto/updateTask.dto';
import { UpdateTaskStatusDTO } from './dto/updateTaskStatus.dto';
import { Task } from './entities/tasks.entity';
import { TaskRepository } from './repository/task.repository';
import { taskStatus } from './task.enum';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskRepository)
    private taskRepository: TaskRepository,
  ) {}

  async getTaskById(id: any): Promise<Task> {
    const res = await this.taskRepository.findOne(id);

    if (!res) {
      throw new NotFoundException('Task Not Found!');
    }
    return res;
  }

  // getAllTask(): Task[] {
  //   return this.tasks;
  // }

  // getTasksWithFilter(@Query() filters: GetTaskFilterDTO): Task[] {
  //   const { status, searchTerm } = filters;
  //   let tasks = this.getAllTask();
  //   if (status) {
  //     tasks = tasks.filter((task) => task.status === status);
  //   }
  //   if (searchTerm) {
  //     tasks = tasks.filter((task) => {
  //       if (
  //         task.title.includes(searchTerm) ||
  //         task.description.includes(searchTerm)
  //       ) {
  //         return true;
  //       }
  //       return false;
  //     });
  //   }
  //   return tasks;
  // }

  // createTask(data: CreateTaskDTO): Task {
  //   const task: Task = {
  //     id: uuidV4(),
  //     title: data.title,
  //     description: data.description,
  //     status: taskStatus.Pending,
  //   };
  //   this.tasks.push(task);
  //   return task;
  // }

  // updateTask(id: string, data: UpdateTaskDTO): Task {
  //   const task = this.getTaskById(id);
  //   task.title = data?.title;
  //   task.description = data?.description;
  //   return task;
  // }

  // deleteTaskById(id: string) {
  //   this.tasks = this.tasks.filter((task) => task.id !== id);
  // }

  // updateTaskStatus(id: string, statusData: UpdateTaskStatusDTO) {
  //   const task = this.getTaskById(id);
  //   task.status = statusData.status;
  //   return task;
  // }
}
