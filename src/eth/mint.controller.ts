import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { MintDto } from './dtos/mint-dto';
import { PinataService } from './pinata.service';
import { EthService } from './eth.service';

@Controller('mint')
export class MintController {
  constructor(
    private readonly pinata: PinataService,
    private readonly eth: EthService,
  ) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  async create(
    @Body() mintDto: MintDto,
    @UploadedFile() image: Express.Multer.File,
  ) {
    const { body, pin } = await this.pinata.pinNFTMetadata(
      image.path,
      mintDto.name,
      mintDto.description,
    );
    const mintData = await this.eth.mint(
      mintDto.accountId,
      mintDto.tokenId,
      1,
      pin.IpfsHash,
    );

    return { pinData: body, mintData };
  }
}
