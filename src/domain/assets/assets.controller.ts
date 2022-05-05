import { Controller, Get, Param, Query } from '@nestjs/common';
import { OpenSeaService } from '../opensea/opensea.service';
import { GetFilteredAssetsDto } from './dtos/get-filtered-assets.dto';

@Controller('assets')
export class AssetsController {
  constructor(private readonly opensea: OpenSeaService) {}

  @Get()
  public index(@Query() data: GetFilteredAssetsDto) {
    return this.opensea.assets(data);
  }

  @Get(':address')
  public show(@Param('address') address: string) {
    return this.opensea.asset(address);
  }
}
