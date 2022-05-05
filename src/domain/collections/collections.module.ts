import { Module } from '@nestjs/common';
import { CollectionsController } from './collections.controller';
import { OpenSeaModule } from '../opensea/opensea.module';

@Module({
  controllers: [CollectionsController],
  imports: [OpenSeaModule],
})
export class CollectionsModule {}
