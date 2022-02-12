import { EntityRepository, Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@EntityRepository(Todo)
export class TodoRepository extends Repository<Todo> {
  findAllTodo(): Promise<Todo[]> {
    return this.find({ relations: ['user'] });
  }

  findTodoById(id: number): Promise<Todo> {
    return this.findOne({ id });
  }

  createTodo(createTodoDto: CreateTodoDto, user: User): Promise<Todo> {
    const { content, status } = createTodoDto;
    return this.save({
      content,
      status,
      user,
    });
  }

  updateTodo(id: number, updateTodoDto: UpdateTodoDto) {
    return this.update({ id }, updateTodoDto);
  }

  deleteTodo(todo: Todo) {
    return this.remove(todo);
  }
}
