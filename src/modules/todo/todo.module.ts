import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { UsersRepository } from '../users/users.repository';
import { TodoRepository } from './todo.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TodoRepository, UsersRepository])],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
