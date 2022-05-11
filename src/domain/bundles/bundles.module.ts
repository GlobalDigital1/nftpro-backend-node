import { Module } from '@nestjs/common';
import { BundlesController } from './bundles.controller';
import { OpenSeaModule } from '../open-sea/open-sea.module';

@Module({
  controllers: [BundlesController],
  imports: [OpenSeaModule],
})
export class BundlesModule {}
