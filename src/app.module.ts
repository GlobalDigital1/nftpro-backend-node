import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './domain/auth/auth.module';
import { UsersModule } from './domain/users/users.module';
import { AssetsModule } from './domain/assets/assets.module';
import { OpenSeaModule } from './domain/open-sea/open-sea.module';
import { BundlesModule } from './domain/bundles/bundles.module';
import { CollectionsModule } from './domain/collections/collections.module';
import { EtherScanModule } from './domain/ether-scan/ether-scan.module';
import { EthPricesModule } from './domain/eth-prices/eth-prices.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ConfigModule.forRoot(),
    ScheduleModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mysql',
        host: process.env.DATABASE_HOST,
        port: +process.env.DATABASE_PORT,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        autoLoadEntities: true,
        synchronize: process.env.DATABASE_SYNC === 'true',
      }),
    }),
    AssetsModule,
    OpenSeaModule,
    BundlesModule,
    CollectionsModule,
    EtherScanModule,
    EthPricesModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
