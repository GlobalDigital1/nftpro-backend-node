import { IsOptional } from 'class-validator';

export class GetFilteredAssetsDto {
  @IsOptional()
  order_by: string;

  @IsOptional()
  order_direction: string;

  @IsOptional()
  search: string;

  @IsOptional()
  cursor: string;
}
