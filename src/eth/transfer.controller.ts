import { Body, Controller, Post } from '@nestjs/common';
import { TransferDto } from './dtos/transfer-dto';
import { EthService } from './eth.service';

@Controller('eth')
export class TransferController {
  constructor(private readonly eth: EthService) {}

  @Post()
  async create(@Body() transferDto: TransferDto) {
    return this.eth.transfer(
      transferDto.from,
      transferDto.to,
      1,
      transferDto.tokenId,
    );
  }
}
