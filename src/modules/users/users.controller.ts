import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  NotFoundException,
  // NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { USER_DOES_NOT_EXIST } from './users.constant';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @ApiOkResponse({ type: User, description: 'Get users' })
  @ApiQuery({ name: 'username', required: false })
  @Get()
  getAllUsers(@Query('username') username?: string): Promise<User[]> {
    return this.userService.getAllUsers(username);
  }

  @ApiOkResponse({ type: User, description: 'Get user' })
  @ApiNotFoundResponse()
  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number): Promise<User> {
    const user = this.userService.getUserById(id);

    if (!user) {
      // throw new NotFoundException(USER_DOES_NOT_EXIST);
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: USER_DOES_NOT_EXIST,
        },
        HttpStatus.NOT_FOUND,
      );
    }

    return user;
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Put(':id')
  async updateUser(
    @Body() updateUserDto: UpdateUserDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    const user = await this.getUserById(id);
    if (!user) {
      throw new NotFoundException(USER_DOES_NOT_EXIST);
    }
    return this.userService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  async deleteUser(@Param('id', ParseIntPipe) id: number) {
    const user = await this.getUserById(id);
    if (!user) {
      throw new NotFoundException(USER_DOES_NOT_EXIST);
    }
    return this.userService.deleteUser(user);
  }
}
