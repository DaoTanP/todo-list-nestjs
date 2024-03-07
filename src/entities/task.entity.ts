import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity('tasks')
export class Task extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('nvarchar')
  title: string;

  @Column('nvarchar', { nullable: true })
  description: string;

  @Column('timestamp', {
    default: new Date().toISOString().split('T')[0] + ' 23:59:59',
  })
  dueDate: Date;

  @Column({ default: false })
  isFinished: boolean;
}
