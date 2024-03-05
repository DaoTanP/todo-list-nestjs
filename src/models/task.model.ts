import { ApiProperty } from '@nestjs/swagger';

export class Task {
  @ApiProperty({
    description: 'The auto-generated id of the task',
    example: 23,
  })
  id?: number;

  @ApiProperty({
    description: 'The title of your task',
    example: 'Workout at the gym',
  })
  title: string;

  @ApiProperty({
    description: 'Describes in more detail about your task',
    example: 'Jumping jacks, burpees, pushups, jump squats, high knees',
  })
  description: string;

  @ApiProperty({
    description: 'The deadline for the task',
    example: '2024-02-28T03:00:00.000Z',
  })
  dueDate?: Date;

  @ApiProperty({
    description: 'Whether you have finished the task',
    example: true,
  })
  isFinished?: boolean;
}
