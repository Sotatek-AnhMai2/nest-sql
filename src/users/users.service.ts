import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [];

  getAllUsers(username?: string): User[] {
    if (username) {
      return this.users.filter((user) => user.username === username);
    }
    return this.users;
  }

  getUserById(id: number): User {
    return this.users.find((user) => user.id === id);
  }

  createUser(createUserDto: CreateUserDto): User {
    const { username, password } = createUserDto;
    const newUser = { id: Date.now(), username, password };
    this.users.push(newUser);
    return newUser;
  }
}
