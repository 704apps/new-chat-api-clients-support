import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterColumnImageInMessage1721670088463 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.renameColumn('messages', 'urImage', 'urlImage');

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.renameColumn('messages', 'urlImage', 'urImage');

    }

}
