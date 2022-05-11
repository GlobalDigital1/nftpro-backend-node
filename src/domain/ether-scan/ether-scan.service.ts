import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom, map } from 'rxjs';
import { EthPricesService } from '../eth-prices/eth-prices.service';
import { EthPrice } from '../../entities/eth-price.entity';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class EtherScanService {
  apiKey: string;
  host: string;

  constructor(
    private readonly http: HttpService,
    private readonly ethPrices: EthPricesService,
  ) {
    this.host = process.env.ETHERSCAN_HOST;
    this.apiKey = process.env.ETHERSCAN_API_KEY;
  }

  @Cron('0 * * * *')
  public async sync() {
    const price = await this.getLastPrice();
    console.log(price);
    return this.ethPrices.create(price);
  }

  private async getLastPrice() {
    const data = await lastValueFrom(
      this.http
        .get(this.host, {
          params: {
            module: 'stats',
            action: 'ethprice',
            apikey: this.apiKey,
          },
        })
        .pipe(map((response) => response.data)),
    );

    return new EthPrice({
      ethbtc: data.result.ethbtc,
      ethbtcUpdatedAt: new Date(data.result.ethbtc_timestamp * 1000),
      ethusd: data.result.ethusd,
      ethusdUpdatedAt: new Date(data.result.ethusd_timestamp * 1000),
    });
  }
}
