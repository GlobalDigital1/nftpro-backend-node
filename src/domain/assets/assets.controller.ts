import { Controller, Get, Param, Query } from '@nestjs/common';
import { OpenSeaService } from '../open-sea/open-sea.service';
import { GetFilteredAssetsDto } from './dtos/get-filtered-assets.dto';

@Controller('assets')
export class AssetsController {
  constructor(private readonly opensea: OpenSeaService) {}

  @Get()
  public index(@Query() data: GetFilteredAssetsDto) {
    return this.opensea.assets(data);
  }

  @Get(':address/:token')
  public show(
    @Param('address') address: string,
    @Param('token') token: string,
  ) {
    return this.opensea.asset(address, token);
  }
}
