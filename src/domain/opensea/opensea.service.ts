import { Injectable } from '@nestjs/common';
import * as Web3 from 'web3';
import { Network, OpenSeaPort } from 'opensea-js';

@Injectable()
export class OpenSeaService {
  seaport: OpenSeaPort;

  constructor() {
    // @ts-ignore
    const provider = new Web3.providers.HttpProvider(
      'https://mainnet.infura.io',
    );

    this.seaport = new OpenSeaPort(provider, {
      networkName: Network.Rinkeby,
      apiKey: process.env.OPENSEA_API_KEY,
    });
  }

  public assets(params) {
    return this.seaport.api.getAssets(params);
  }

  public collections(params) {
    return this.seaport.api.getBundles(params);
  }

  public asset(address) {
    return this.seaport.api.getAsset(address);
  }

  public collection(slug) {
    return this.seaport.api.getBundle(slug);
  }
}
