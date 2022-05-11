import { Module } from '@nestjs/common';
import { CollectionsController } from './collections.controller';
import { OpenSeaModule } from '../open-sea/open-sea.module';

@Module({
  controllers: [CollectionsController],
  imports: [OpenSeaModule],
})
export class CollectionsModule {}
