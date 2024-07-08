import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterAmountCaractrsColumnMessgeTableMessages1720027095243 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE messages MODIFY messages VARCHAR(2500)`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE messages MODIFY messages VARCHAR(250)`);

    }

}
