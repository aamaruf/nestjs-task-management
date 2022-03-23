import { Body, Controller, Get, Post } from '@nestjs/common';
import { title } from 'process';
import { Task } from './task.model';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get()
  getAllTask(): Task[] {
    return this.taskService.getAllTask();
  }
  @Post()
  createTask(@Body() body) {
    console.log('createTask ~ body', body);
    return this.taskService.createTask(body);
  }
}
