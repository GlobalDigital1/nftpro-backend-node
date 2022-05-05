import { Module } from '@nestjs/common';
import { AssetsController } from './assets.controller';
import { OpenSeaModule } from '../opensea/opensea.module';

@Module({
  controllers: [AssetsController],
  imports: [OpenSeaModule],
})
export class AssetsModule {}
