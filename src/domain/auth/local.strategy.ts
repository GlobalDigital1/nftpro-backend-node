import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';
import { User } from '../../entities/user.entity';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'walletId' });
  }

  async validate(walletId: string, token: string): Promise<User> {
    const user = await this.authService.attempt(walletId, token);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
