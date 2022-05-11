import { IsOptional } from 'class-validator';

export class GetFilteredAssetsDto {
  @IsOptional()
  order_by: string;

  @IsOptional()
  order_direction: string;

  @IsOptional()
  search: string;

  @IsOptional()
  owner: string;

  @IsOptional()
  limit: number;

  @IsOptional()
  offset: number;
}
