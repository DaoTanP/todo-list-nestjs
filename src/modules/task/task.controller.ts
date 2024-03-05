import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from 'src/models/task.model';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async getAll() {
    return this.taskService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: number) {
    return this.taskService.getById(id);
  }

  @Post()
  @HttpCode(200)
  async createOne(@Body() formData: Task) {
    return this.taskService.createOne(formData);
  }

  @Patch(':id')
  async updateById(@Param('id') id, @Body() formData: Task) {
    return this.taskService.updateById(id, formData);
  }

  @Delete(':id')
  async deleteById(@Param('id') id) {
    return this.taskService.deleteById(id);
  }
}
