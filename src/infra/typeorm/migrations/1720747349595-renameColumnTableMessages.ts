import { MigrationInterface, QueryRunner } from "typeorm";

export class RenameColumnTableMessages1720747349595 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.renameColumn('messages', 'orige', 'origin');

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.renameColumn('messages', 'origin', 'orige');

    }

}
