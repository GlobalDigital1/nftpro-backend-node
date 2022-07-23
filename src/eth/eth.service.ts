import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers';

const abi =
  require('../../artifacts/contracts/BaseERC1155.sol/nftproERC1155.json').abi;

@Injectable()
export class EthService {
  contractAddress = process.env.ETH_CONTRANCT_ADDRESS;
  provider = new ethers.providers.InfuraProvider(
    'rinkeby',
    process.env.ETH_API_KEY_PROJECT_ID,
  );
  wallet = new ethers.Wallet(process.env.ETH_PRIVATE_KEY, this.provider);
  signer = this.wallet.connect(this.provider);
  contract = new ethers.Contract(this.contractAddress, abi, this.signer);

  mint(account: string, id: string, amount: number, tokenCID: string) {
    return this.contract.mint(account, id, amount, [], tokenCID);
  }

  transfer(from: string, to: string, amount: number, id: string) {
    return this.contract.safeTransferFrom(from, to, id, amount, []);
  }
}
