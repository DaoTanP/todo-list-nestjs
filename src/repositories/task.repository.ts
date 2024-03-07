import { Injectable } from '@nestjs/common';
import { Task } from '../entities/task.entity';
import { Task as TaskModel } from '../dto/task.dto';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class TaskRepository extends Repository<Task> {
  constructor(private dataSource: DataSource) {
    super(Task, dataSource.createEntityManager());
  }

  async getAll() {
    return this.find();
  }

  async getById(id: number) {
    return this.findOne({ where: { id } });
  }

  async createOne(task: TaskModel) {
    return this.create(task).save();
  }
  async updateById(id: number, task: TaskModel) {
    return this.update({ id }, task);
  }
  async deleteById(id: number) {
    return this.delete({ id });
  }
}
