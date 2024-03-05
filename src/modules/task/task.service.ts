import { Injectable } from '@nestjs/common';
import { Task } from 'src/models/task.model';
import { TaskRepository } from 'src/repositories/task.repository';

@Injectable()
export class TaskService {
  constructor(private readonly taskRepository: TaskRepository) {}

  async getAll() {
    return this.taskRepository.getAll();
  }

  async getById(id: number) {
    const task = await this.taskRepository.getById(id);

    if (task === null) {
      return { message: 'Task not found' };
    }

    return task;
  }

  async createOne(task: Task) {
    return this.taskRepository.createOne(task);
  }

  async updateById(id: number, task: Task) {
    const result = await this.taskRepository.updateById(id, task);
    if (result.affected === 0) {
      return { message: 'Task not found' };
    }

    return { message: 'Task updated successfully' };
  }

  async deleteById(id: number) {
    const result = await this.taskRepository.deleteById(id);

    if (result.affected === 0) {
      return { message: 'Task not found' };
    }

    return { message: 'Task deleted successfully' };
  }
}
