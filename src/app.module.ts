import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { EthModule } from './eth/eth.module';
import { PolygonModule } from './polygon/polygon.module';
import { PinataModule } from './pinata/pinata.module';

@Module({
  imports: [ConfigModule.forRoot(), EthModule, PolygonModule, PinataModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
