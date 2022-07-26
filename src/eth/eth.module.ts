import { Module } from '@nestjs/common';
import { EthService } from './eth.service';
import { EthController } from './eth.controller';
import { MulterModule } from '@nestjs/platform-express';
import { PinataModule } from '../pinata/pinata.module';

@Module({
  imports: [
    MulterModule.register({
      dest: './files',
    }),
    PinataModule,
  ],
  providers: [EthService],
  controllers: [EthController],
})
export class EthModule {}
