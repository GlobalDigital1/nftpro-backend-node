import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('ethPrices')
export class EthPrice {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  ethbtc: string;

  @Column()
  ethbtcUpdatedAt: Date;

  @Column()
  ethusd: string;

  @Column()
  ethusdUpdatedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  constructor(partial: Partial<EthPrice>) {
    Object.assign(this, partial);
  }
}
