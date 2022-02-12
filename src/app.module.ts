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
import { Anime } from './modules/anime/entities/anime.entity';
import { Category } from './modules/category/entities/category.entity';
import { Comment } from './modules/comment/entities/comment.entity';
import { Lobby } from './modules/lobby/entities/lobby.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UsersModule,
    TypeOrmModule.forFeature([User, Todo, Anime, Comment, Category, Lobby]),
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
