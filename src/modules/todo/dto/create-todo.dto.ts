import { ApiProperty } from '@nestjs/swagger';
import { MinLength, MaxLength } from 'class-validator';
import { TODO_STATUS } from '../todo.constant';

export class CreateTodoDto {
  @ApiProperty()
  @MinLength(5)
  @MaxLength(100)
  content: string;

  @ApiProperty({ required: false, default: TODO_STATUS.WAITING })
  status: TODO_STATUS;

  @ApiProperty()
  user_id: number;
}
