import { Module } from '@nestjs/common';
import { OpenSeaService } from './open-sea.service';

@Module({
  providers: [OpenSeaService],
  exports: [OpenSeaService],
})
export class OpenSeaModule {}
