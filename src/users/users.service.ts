import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './create-user.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async findOneBy(username: string): Promise<UserEntity | undefined> {
    return this.usersRepository.findOneBy({ username });
  }

  async createUser(body: CreateUserDto): Promise<Omit<UserEntity, 'password'>> {
    const { username, password } = body;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = this.usersRepository.create({
      username,
      password: hashedPassword,
    });

    const createdUser = await this.usersRepository.save(user);

    return {
      id: createdUser.id,
      username: createdUser.username,
    };
  }
}
