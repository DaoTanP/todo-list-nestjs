import { Injectable } from '@nestjs/common';
import { Task } from '../dto/task.dto';
import { TaskRepository } from '../repositories/task.repository';

@Injectable()
export class TaskService {
  constructor(private readonly taskRepository: TaskRepository) {}

  async getAll() {
    return this.taskRepository.getAll();
  }

  async getById(id: number) {
    return this.taskRepository.getById(id);
  }

  async createOne(task: Task) {
    return this.taskRepository.createOne(task);
  }

  async updateById(id: number, task: Task) {
    const result = await this.taskRepository.updateById(id, task);
    return result.affected !== 0;
  }

  async deleteById(id: number) {
    const result = await this.taskRepository.deleteById(id);
    return result.affected !== 0;
  }
}
