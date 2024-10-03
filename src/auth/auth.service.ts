import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.findOneBy(username);

    if (user && (await bcrypt.compare(pass, user.password))) {
      return {
        id: user.id,
        username: user.username,
      };
    }

    return null;
  }

  async login(user: any) {
    const payload = { username: user.name, sub: user.userId };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
