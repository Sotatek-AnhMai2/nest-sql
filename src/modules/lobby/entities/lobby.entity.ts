import { User } from 'src/modules/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { LOBBY_DEFAULT_CONTENT } from '../lobby.constant';

@Entity()
export class Lobby {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ default: LOBBY_DEFAULT_CONTENT })
  content: string;

  @ManyToMany(() => User, (user) => user.lobbies)
  @JoinTable({
    name: 'lobby_user',
    joinColumn: {
      name: 'user_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'lobby_id',
      referencedColumnName: 'id',
    },
  })
  users: User[];
}
