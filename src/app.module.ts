import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './modules/users/entities/user.entity';
import { UsersModule } from './modules/users/users.module';
import { TodoModule } from './modules/todo/todo.module';
import { Todo } from './modules/todo/entities/todo.entity';
import { AnimeModule } from './modules/anime/anime.module';
import { CategoryModule } from './modules/category/category.module';
import { LobbyModule } from './modules/lobby/lobby.module';
import { CommentModule } from './modules/comment/comment.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UsersModule,
    TypeOrmModule.forFeature([User, Todo]),
    TodoModule,
    AnimeModule,
    CategoryModule,
    LobbyModule,
    CommentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
