import { Injectable, NotFoundException } from '@nestjs/common';
import { removeExcessPropertyWhenUpdate } from 'src/commons/helpers/refine-data';
import { USER_DOES_NOT_EXIST } from '../users/users.constant';
import { UsersRepository } from '../users/users.repository';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TODO_DOES_NOT_EXIST } from './todo.constant';
import { TodoRepository } from './todo.repository';

@Injectable()
export class TodoService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly todoRepository: TodoRepository,
  ) {}

  async create(createTodoDto: CreateTodoDto) {
    const { user_id } = createTodoDto;
    const user = await this.usersRepository.findUserById(user_id);
    if (!user) {
      throw new NotFoundException(USER_DOES_NOT_EXIST);
    }

    this.todoRepository.createTodo(createTodoDto, user);
  }

  findAll() {
    return this.todoRepository.findAllTodo();
  }

  async findOne(id: number) {
    const todo = await this.todoRepository.findTodoById(id);
    if (!todo) {
      throw new NotFoundException(TODO_DOES_NOT_EXIST);
    }

    return todo;
  }

  async update(id: number, updateTodoDto: UpdateTodoDto) {
    const todo = await this.todoRepository.findTodoById(id);
    if (!todo) {
      throw new NotFoundException(TODO_DOES_NOT_EXIST);
    }

    return this.todoRepository.updateTodo(
      id,
      removeExcessPropertyWhenUpdate(updateTodoDto),
    );
  }

  async remove(id: number) {
    const todo = await this.todoRepository.findTodoById(id);
    if (!todo) {
      throw new NotFoundException(TODO_DOES_NOT_EXIST);
    }

    return this.todoRepository.deleteTodo(todo);
  }
}
