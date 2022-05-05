import { Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { instanceToPlain } from 'class-transformer';
import { CurrentUser } from '../../shared/decorators/current-user.decorator';
import { User } from '../../entities/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  login(@CurrentUser() user: User) {
    return {
      user: instanceToPlain(user),
      token: this.auth.login(user),
    };
  }
}
