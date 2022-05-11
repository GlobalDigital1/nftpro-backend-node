import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateEthPricesTable1652184098904 implements MigrationInterface {
    name = 'CreateEthPricesTable1652184098904'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`ethPrices\` (\`id\` varchar(36) NOT NULL, \`ethbtc\` varchar(255) NOT NULL, \`ethbtcUpdatedAt\` datetime NOT NULL, \`ethusd\` varchar(255) NOT NULL, \`ethusdUpdatedAt\` datetime NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`ethPrices\``);
    }

}
