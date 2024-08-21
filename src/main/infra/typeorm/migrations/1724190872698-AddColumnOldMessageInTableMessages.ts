import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddColumnOldMessageInTableMessages1724190872698 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('messages', new TableColumn({
            name:'oldMessages',
            type:'text',
            length: "100000",
            isNullable: false
        }))
    }
    

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('messages','oldMessage');

    }

}
