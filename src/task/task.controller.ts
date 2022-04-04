import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { GetTaskFilterDTO } from './dto/getTaskFilter.dto';
import { UpdateTaskDTO } from './dto/updateTask.dto';
import { Task, taskStatus } from './task.model';
import { TaskService } from './task.service';
@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get()
  getTask(@Query() filterDto: GetTaskFilterDTO): Task[] {
    if (Object.keys(filterDto).length) {
      return this.taskService.getTasksWithFilter(filterDto);
    } else {
      return this.taskService.getAllTask();
    }
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string): Task {
    return this.taskService.getTaskById(id);
  }

  @Patch('/:id/status')
  updateTaskStatus(
    @Param('id') id: string,
    @Body('status') status: taskStatus,
  ): Task {
    return this.taskService.updateTaskStatus(id, status);
  }

  @Post()
  createTask(@Body() body) {
    return this.taskService.createTask(body);
  }

  @Put('/:id')
  updateTask(@Param('id') id: string, @Body() data: UpdateTaskDTO): Task {
    return this.taskService.updateTask(id, data);
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: string): void {
    return this.taskService.deleteTaskById(id);
  }
}
