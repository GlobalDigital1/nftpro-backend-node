import { Injectable } from '@nestjs/common';
import { createReadStream } from 'fs';
import * as pinataSDK from '@pinata/sdk';

@Injectable()
export class PinataService {
  public async pinNFTMetadata(
    imagePath: string,
    name: string,
    description: string,
  ) {
    // @ts-ignore
    const pinata = pinataSDK(
      process.env.PINATA_API_KEY,
      process.env.PINATA_API_SECRET,
    );

    const readableStreamForFile = createReadStream(imagePath);
    const ImagePin = await pinata.pinFileToIPFS(readableStreamForFile);
    //saves image CID
    const imagePin = await ImagePin;
    //uploads metadata
    const body = {
      name: name,
      description: description,
      image: 'https://nft-pro.mypinata.cloud/ipfs/' + imagePin.IpfsHash,
    };

    enum CidVersion {
      Zero,
      One,
    }

    const options = {
      pinataMetadata: {
        name: body.name + ' metadata',
      },
      pinataOptions: {
        cidVersion: CidVersion.Zero,
      },
    };

    const pin = await pinata.pinJSONToIPFS(body, options);

    return { body, pin };
  }
}
