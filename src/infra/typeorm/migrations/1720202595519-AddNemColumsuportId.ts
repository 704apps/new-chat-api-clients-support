import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddNemColumsuportId1720202595519 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('messages', new TableColumn({
            name:'supportId',
            type: 'varchar',
            isNullable: true,
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('messages','supportId' );
    }

}
