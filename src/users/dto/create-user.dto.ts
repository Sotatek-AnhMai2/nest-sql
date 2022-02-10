import { ApiProperty } from '@nestjs/swagger';
import { IsAlphanumeric, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsAlphanumeric()
  @MinLength(6)
  @MaxLength(20)
  username: string;

  @ApiProperty()
  @MinLength(6)
  @MaxLength(20)
  password: string;
}
