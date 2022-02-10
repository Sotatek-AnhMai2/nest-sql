import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  // NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @ApiOkResponse({ type: User, description: 'Get users' })
  @ApiQuery({ name: 'username', required: false })
  @Get()
  getUsers(@Query('username') username?: string): User[] {
    return this.userService.getAllUsers(username);
  }

  @ApiOkResponse({ type: User, description: 'Get user' })
  @ApiNotFoundResponse()
  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number): User {
    const user = this.userService.getUserById(id);

    if (!user) {
      // throw new NotFoundException('User does not exist');
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'User does not exist',
        },
        HttpStatus.NOT_FOUND,
      );
    }

    return user;
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto): User {
    return this.userService.createUser(createUserDto);
  }
}
