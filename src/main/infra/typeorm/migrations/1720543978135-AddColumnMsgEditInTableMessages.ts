import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddColumnMsgEditInTableMessages1720543978135 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('messages', new TableColumn({
            name:'msgEdit',
            type: 'boolean',
            isNullable: true,
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('messages','msgEdit')
    }

}
