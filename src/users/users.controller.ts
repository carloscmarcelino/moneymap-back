import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './create-user.dto';
import { UserEntity } from './users.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('signup')
  createUser(
    @Body() body: CreateUserDto,
  ): Promise<Omit<UserEntity, 'password'>> {
    return this.usersService.createUser(body);
  }
}
