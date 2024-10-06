import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserEntity } from './users.entity';
import { CreateUserDto } from './dto/create-user.dto';

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
