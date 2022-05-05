import { Controller, Get, Param, Query } from '@nestjs/common';
import { OpenSeaService } from '../opensea/opensea.service';
import { GetFilteredCollectionsDto } from './dtos/get-filtered-collections.dto';

@Controller('collections')
export class CollectionsController {
  constructor(private readonly opensea: OpenSeaService) {}

  @Get()
  public index(@Query() data: GetFilteredCollectionsDto) {
    return this.opensea.collections(data);
  }

  @Get(':slug')
  public show(@Param('slug') slug: string) {
    return this.opensea.collection(slug);
  }
}
