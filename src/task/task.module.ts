import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/tasks.entity';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';

const ENTITIES = [Task];
const SERVICES = [TaskService];
const CONTROLLERS = [TaskController];
@Module({
  imports: [TypeOrmModule.forFeature([...ENTITIES])],
  providers: [...SERVICES, ...CONTROLLERS],
  controllers: [...CONTROLLERS],
  exports: [...SERVICES, ...CONTROLLERS],
})
export class TaskModule {}
