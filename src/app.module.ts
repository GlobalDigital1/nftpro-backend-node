import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { MintModule } from './mint/mint.module';

@Module({
  imports: [ConfigModule.forRoot(), MintModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
