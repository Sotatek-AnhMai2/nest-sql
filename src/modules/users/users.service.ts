import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  getAllUsers(username?: string): Promise<User[]> {
    if (username) {
      return this.usersRepository.findUserByUsername(username);
    }
    return this.usersRepository.findAllUsers();
  }

  getUserById(id: number): Promise<User> {
    return this.usersRepository.findUserById(id);
  }

  createUser(createUserDto: CreateUserDto): Promise<User> {
    return this.usersRepository.createUser(createUserDto);
  }

  updateUser(id: number, updateUserDto: UpdateUserDto) {
    for (const key in updateUserDto) {
      if (!updateUserDto.hasOwnProperty(key)) {
        delete updateUserDto[key];
      }
    }

    return this.usersRepository.updateUser(id, updateUserDto);
  }
}
