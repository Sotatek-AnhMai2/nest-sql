import { Lobby } from 'src/modules/lobby/entities/lobby.entity';
import { Todo } from 'src/modules/todo/entities/todo.entity';
import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  age?: number;

  @OneToMany(() => Todo, (todo) => todo.user, { eager: true })
  todoList: Todo[];

  @ManyToMany(() => Lobby, (lobby) => lobby.users)
  lobbies: Lobby[];
}
