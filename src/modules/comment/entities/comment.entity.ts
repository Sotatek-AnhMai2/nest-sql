import { Lobby } from 'src/modules/lobby/entities/lobby.entity';
import { User } from 'src/modules/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @OneToOne(() => User, (user) => user.id, { nullable: true })
  @JoinColumn({ name: 'reply_id' })
  replyTo: User;

  @OneToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'owner_id' })
  owner: User;

  @OneToOne(() => Lobby, (lobby) => lobby.id)
  @JoinColumn({ name: 'lobby_id' })
  lobby: Lobby;
}
