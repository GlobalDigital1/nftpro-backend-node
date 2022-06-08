import { Module } from '@nestjs/common';
import { PinataService } from './pinata.service';
import { MintEthService } from './mint-eth.service';
import { MintController } from './mint.controller';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    MulterModule.register({
      dest: './files',
    }),
  ],
  providers: [PinataService, MintEthService],
  controllers: [MintController],
})
export class MintModule {}
