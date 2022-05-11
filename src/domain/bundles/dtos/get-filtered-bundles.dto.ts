import { IsOptional } from 'class-validator';

export class GetFilteredBundlesDto {
  @IsOptional()
  search: string;

  @IsOptional()
  owner: string;

  @IsOptional()
  limit: number;

  @IsOptional()
  offset: number;
}
