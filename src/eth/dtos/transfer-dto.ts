import { IsNotEmpty } from 'class-validator';

export class TransferDto {
  @IsNotEmpty()
  from: string;

  @IsNotEmpty()
  to: string;

  @IsNotEmpty()
  tokenId: string;
}
