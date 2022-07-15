import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    TaskModule,
    TypeOrmModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'reshop',
      password: '737467',
      database: 'nestjs-task-management-db',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
