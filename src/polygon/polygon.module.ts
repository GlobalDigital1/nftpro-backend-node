import { Module } from '@nestjs/common';
import { PolygonService } from './polygon.service';
import { PolygonController } from './polygon.controller';
import { PinataModule } from '../pinata/pinata.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    MulterModule.register({
      dest: './files',
    }),
    PinataModule,
  ],
  providers: [PolygonService],
  controllers: [PolygonController],
})
export class PolygonModule {}
