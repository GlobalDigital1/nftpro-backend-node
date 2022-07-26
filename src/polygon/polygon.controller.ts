import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { PinataService } from '../pinata/pinata.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { PolygonService } from './polygon.service';
import { MintDto } from './dtos/mint-dto';

@Controller('polygon')
export class PolygonController {
  constructor(
    private readonly pinata: PinataService,
    private readonly polygon: PolygonService,
  ) {}

  @Post('mint')
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
    const mintData = await this.polygon.mint(
      mintDto.accountId,
      mintDto.tokenId,
      1,
      pin.IpfsHash,
    );

    return { pinData: body, mintData };
  }
}
