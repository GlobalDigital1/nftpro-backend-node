import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers';

const abi =
  require('../../artifacts/contracts/BaseERC1155.sol/nftproERC1155.json').abi;

@Injectable()
export class MintEthService {
  contractAddress = process.env.ETH_CONTRANCT_ADDRESS;
  provider = new ethers.providers.InfuraProvider(
    'rinkeby',
    process.env.ETH_API_KEY_PROJECT_ID,
  );

  mint(account: string, id: string, amount: number, tokenCID: string) {
    const wallet = new ethers.Wallet(
      process.env.ETH_PRIVATE_KEY,
      this.provider,
    );
    const signer = wallet.connect(this.provider);
    const contract = new ethers.Contract(this.contractAddress, abi, signer);

    return contract.mint(account, id, amount, [], tokenCID);
  }
}
