import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers';
import axios from 'axios';

const abi =
  require('../../artifacts/contracts/BaseERC1155.sol/nftproERC1155.json').abi;

@Injectable()
export class PolygonService {
  contractAddress = process.env.POLYGON_CONTRACT_ADDRESS;
  provider = new ethers.providers.InfuraProvider(
    process.env.POLYGON_NETWORK,
    process.env.POLYGON_API_KEY_PROJECT_ID,
  );
  wallet = new ethers.Wallet(process.env.POLYGON_PRIVATE_KEY, this.provider);
  signer = this.wallet.connect(this.provider);
  contract = new ethers.Contract(this.contractAddress, abi, this.signer);

  async mint(account: string, id: string, amount: number, tokenCID: string) {
    const gasEstimated = await this.contract.estimateGas.mint(
      account,
      id,
      amount,
      [],
      tokenCID,
    );

    const gas = await this.calcGas(gasEstimated);
    return this.contract.mint(account, id, amount, [], tokenCID, gas);
  }

  transfer(from: string, to: string, amount: number, id: string) {
    return this.contract.safeTransferFrom(from, to, id, amount, []);
  }

  parse(data) {
    return ethers.utils.parseUnits(Math.ceil(data) + '', 'gwei');
  }

  async calcGas(gasEstimated) {
    const gas = {
      gasLimit: gasEstimated, //.mul(110).div(100)
      maxFeePerGas: ethers.BigNumber.from(40000000000),
      maxPriorityFeePerGas: ethers.BigNumber.from(40000000000),
    };
    try {
      const { data } = await axios({
        method: 'get',
        url: 'https://gasstation-mainnet.matic.network/v2',
      });
      gas.maxFeePerGas = this.parse(data.fast.maxFee);
      gas.maxPriorityFeePerGas = this.parse(data.fast.maxPriorityFee);
    } catch (error) {}
    return gas;
  }
}
