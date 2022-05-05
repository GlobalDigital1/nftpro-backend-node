import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../../entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private readonly jwt: JwtService,
  ) {}

  async attempt(walletId: string, token: string): Promise<any> {
    const user = await this.usersService.findByWalletId(walletId);
    if (user && (await user.isCorrectToken(token))) {
      return user;
    }

    return null;
  }

  login(user: User) {
    return this.jwt.sign({
      sub: user.id,
    });
  }
}
