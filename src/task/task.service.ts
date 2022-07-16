import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { GetTaskFilterDTO } from "./dto/getTaskFilter.dto";
import { Task } from "./entities/tasks.entity";

@Injectable()
export class TaskService {
  constructor(@InjectRepository(Task) private taskRepo: Repository<Task>) {}

  async getTaskById(id: string): Promise<any> {
    const res = await this.taskRepo.findOne({
      where: {
        id,
      },
    });

    if (!res) {
      throw new NotFoundException("Task Not Found!");
    }
    return res;
  }

  async getAllTask(filters?: GetTaskFilterDTO) {
    return await this.taskRepo.find();
  }

  async createTask(data) {
    return await this.taskRepo.save(data);
  }
}
