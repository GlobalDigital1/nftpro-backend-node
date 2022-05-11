import { Module } from '@nestjs/common';
import { EthPricesService } from './eth-prices.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EthPrice } from '../../entities/eth-price.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EthPrice])],
  providers: [EthPricesService],
  exports: [EthPricesService],
})
export class EthPricesModule {}
