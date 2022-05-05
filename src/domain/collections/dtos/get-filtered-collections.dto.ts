import { IsOptional } from 'class-validator';

export class GetFilteredCollectionsDto {
  @IsOptional()
  order_by: string;

  @IsOptional()
  order_direction: string;

  @IsOptional()
  search: string;

  @IsOptional()
  cursor: string;
}
