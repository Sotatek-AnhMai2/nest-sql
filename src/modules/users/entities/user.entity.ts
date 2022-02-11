import { Todo } from 'src/modules/todo/entities/todo.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
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
}
