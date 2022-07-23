import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { EthModule } from './eth/eth.module';

@Module({
  imports: [ConfigModule.forRoot(), EthModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
