import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Length } from 'class-validator';

export class Task {
  @ApiProperty({
    description: 'The auto-generated id of the task',
    example: 23,
    required: true,
    default: 'auto-generated',
  })
  id?: number;

  @ApiProperty({
    description: 'The title of your task',
    example: 'Workout at the gym',
    required: true,
  })
  @Length(1, 255)
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    description: 'Describes in more detail about your task',
    example: 'Jumping jacks, burpees, pushups, jump squats, high knees',
    required: true,
  })
  @Length(1)
  description: string;

  @ApiProperty({
    description: 'The deadline for the task',
    example: '2024-02-28T03:00:00.000Z',
    required: false,
    default: '23:59:59 of the same day',
  })
  dueDate?: Date;

  @ApiProperty({
    description: 'Whether you have finished the task',
    example: true,
    required: false,
    default: false,
  })
  isFinished?: boolean;
}
