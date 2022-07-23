import { IsNotEmpty } from 'class-validator';

export class MintDto {
  @IsNotEmpty()
  accountId: string;

  @IsNotEmpty()
  tokenId: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;
}
