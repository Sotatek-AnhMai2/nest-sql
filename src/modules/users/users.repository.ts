import { EntityRepository, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  findAllUsers(): Promise<User[]> {
    return this.find();
  }

  findUserByUsername(username: string): Promise<User[]> {
    return this.find({ username });
  }

  findUserById(id: number): Promise<User> {
    return this.findOne({ id });
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const newUser = await createUserDto.toEntity();
    return this.save(newUser);
  }

  updateUser(id: number, updateUserDto: UpdateUserDto) {
    return this.update({ id }, updateUserDto);
  }
}
