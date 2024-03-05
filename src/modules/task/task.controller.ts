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
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Task')
@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @ApiOkResponse({
    description: 'Lists all the tasks, or an empty array if no task was found',
    type: Task,
    isArray: true,
  })
  @Get()
  async getAll() {
    return this.taskService.getAll();
  }

  @ApiOkResponse({
    description: 'Get a task by id',
    type: Task,
  })
  @Get(':id')
  async getById(@Param('id') id: number) {
    return this.taskService.getById(id);
  }

  @ApiOkResponse({
    description: 'The newly created task',
    type: Task,
  })
  @Post()
  @HttpCode(200)
  async createOne(@Body() formData: Task) {
    return this.taskService.createOne(formData);
  }

  @ApiOkResponse({
    description: 'Task updated successfully',
  })
  @Patch(':id')
  async updateById(@Param('id') id: number, @Body() formData: Task) {
    return this.taskService.updateById(id, formData);
  }

  @ApiOkResponse({
    description: 'Task deleted successfully',
  })
  @Delete(':id')
  async deleteById(@Param('id') id: number) {
    return this.taskService.deleteById(id);
  }
}
