import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { EthPrice } from '../../entities/eth-price.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EthPricesService {
  constructor(
    @InjectRepository(EthPrice)
    private readonly ethPrices: Repository<EthPrice>,
  ) {}
  create(price) {
    return this.ethPrices.save(price);
  }
}
