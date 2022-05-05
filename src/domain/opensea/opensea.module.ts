import { Module } from '@nestjs/common';
import { OpenSeaService } from './opensea.service';

@Module({
  providers: [OpenSeaService],
  exports: [OpenSeaService],
})
export class OpenSeaModule {}
