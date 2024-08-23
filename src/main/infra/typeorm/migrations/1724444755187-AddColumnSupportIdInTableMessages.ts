import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddColumnSupportIdInTableMessages1724444755187 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('oldMessage', new TableColumn({
            name:'supportId',
            type:'varchar',
            isNullable: true
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('oldMessage','supportId')

    }

}
