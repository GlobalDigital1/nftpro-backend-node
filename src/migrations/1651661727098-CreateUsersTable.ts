import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateUsersTable1651661727098 implements MigrationInterface {
    name = 'CreateUsersTable1651661727098'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` varchar(36) NOT NULL, \`walletId\` varchar(255) NOT NULL, \`token\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_0a95e6aab86ff1b0278c18cf48\` (\`walletId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_0a95e6aab86ff1b0278c18cf48\` ON \`users\``);
        await queryRunner.query(`DROP TABLE \`users\``);
    }

}
