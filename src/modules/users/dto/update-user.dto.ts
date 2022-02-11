import { ApiProperty } from '@nestjs/swagger';
import { IsAlphanumeric, MaxLength, MinLength } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty({ required: false })
  @IsAlphanumeric()
  @MinLength(5)
  @MaxLength(20)
  username?: string;

  @ApiProperty({ required: false })
  age?: number;
}
