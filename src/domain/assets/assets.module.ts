import { Module } from '@nestjs/common';
import { AssetsController } from './assets.controller';
import { OpenSeaModule } from '../open-sea/open-sea.module';

@Module({
  controllers: [AssetsController],
  imports: [OpenSeaModule],
})
export class AssetsModule {}
