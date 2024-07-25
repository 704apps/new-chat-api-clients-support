import { MigrationInterface, QueryRunner } from "typeorm";

export class RenameTable1721941502130 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.renameTable('refleshToken','refreshToken')
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.renameTable('refreshToken','refleshToken')

    }

}
