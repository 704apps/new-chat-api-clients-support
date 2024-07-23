import { MigrationInterface, QueryRunner } from "typeorm";

export class AlternameColumnsContatcts1720017123075 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.renameColumn('contacts', 'name', 'projectId');

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.renameColumn('contacts', 'projectId', 'name');

    }

}
