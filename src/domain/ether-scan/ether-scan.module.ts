import { Module } from '@nestjs/common';
import { EtherScanService } from './ether-scan.service';
import { HttpModule } from '@nestjs/axios';
import { EthPricesModule } from '../eth-prices/eth-prices.module';

@Module({
  providers: [EtherScanService],
  imports: [HttpModule, EthPricesModule],
})
export class EtherScanModule {}
