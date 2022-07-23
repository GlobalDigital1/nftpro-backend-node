import { Module } from '@nestjs/common';
import { PinataService } from './pinata.service';
import { EthService } from './eth.service';
import { MintController } from './mint.controller';
import { MulterModule } from '@nestjs/platform-express';
import { TransferController } from './transfer.controller';

@Module({
  imports: [
    MulterModule.register({
      dest: './files',
    }),
  ],
  providers: [PinataService, EthService],
  controllers: [MintController, TransferController],
})
export class EthModule {}
