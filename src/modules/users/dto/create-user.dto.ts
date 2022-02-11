import { ApiProperty } from '@nestjs/swagger';
import { IsAlphanumeric, MaxLength, MinLength } from 'class-validator';
import { hashPassword } from 'src/commons/helpers/hash';
import { User } from '../entities/user.entity';

export class CreateUserDto {
  @ApiProperty()
  @IsAlphanumeric()
  @MinLength(5)
  @MaxLength(20)
  username: string;

  @ApiProperty()
  @MinLength(6)
  @MaxLength(20)
  password: string;

  async toEntity() {
    const user = new User();
    user.username = this.username;
    user.password = await hashPassword(this.password);
    return user;
  }
}
