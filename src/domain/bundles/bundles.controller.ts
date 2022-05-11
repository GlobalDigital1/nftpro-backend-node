import { Controller, Get, Param, Query } from '@nestjs/common';
import { OpenSeaService } from '../open-sea/open-sea.service';
import { GetFilteredBundlesDto } from './dtos/get-filtered-bundles.dto';

@Controller('bundles')
export class BundlesController {
  constructor(private readonly opensea: OpenSeaService) {}

  @Get()
  public index(@Query() data: GetFilteredBundlesDto) {
    return this.opensea.bundles(data);
  }

  @Get(':slug')
  public show(@Param('slug') slug: string) {
    return this.opensea.bundle(slug);
  }
}
