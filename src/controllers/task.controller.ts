import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TaskService } from '../services/task.service';
import { Task } from 'src/dto/task.dto';
import { ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { Message } from 'src/constants/message';

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

  @ApiOkResponse({ description: 'Get a task by id', type: Task })
  @ApiNotFoundResponse({ description: Message.NOT_FOUND })
  @Get(':id')
  async getById(@Param('id') id: number, @Res() res: Response) {
    const task = await this.taskService.getById(id);

    if (task === null) {
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ message: Message.NOT_FOUND });
    }

    return res.status(HttpStatus.OK).json(task);
  }

  @ApiOkResponse({ description: 'The newly created task', type: Task })
  @UsePipes(ValidationPipe)
  @Post()
  @HttpCode(200)
  async createOne(@Body() formData: Task) {
    return this.taskService.createOne(formData);
  }

  @ApiOkResponse({ description: 'Task updated successfully' })
  @ApiNotFoundResponse({ description: Message.NOT_FOUND })
  @Patch(':id')
  async updateById(
    @Param('id') id: number,
    @Body() formData: Task,
    @Res() res: Response,
  ) {
    const result = await this.taskService.updateById(id, formData);

    if (!result) {
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ message: Message.NOT_FOUND });
    }

    return res
      .status(HttpStatus.OK)
      .json({ message: 'Task updated successfully' });
  }

  @ApiOkResponse({ description: 'Task deleted successfully' })
  @ApiNotFoundResponse({ description: Message.NOT_FOUND })
  @Delete(':id')
  async deleteById(@Param('id') id: number, @Res() res: Response) {
    const result = await this.taskService.deleteById(id);

    if (!result) {
      return res
        .status(HttpStatus.NOT_FOUND)
        .json({ message: Message.NOT_FOUND });
    }

    return res
      .status(HttpStatus.OK)
      .json({ message: 'Task deleted successfully' });
  }
}
