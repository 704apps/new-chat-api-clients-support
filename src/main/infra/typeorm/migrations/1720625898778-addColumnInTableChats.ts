import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddColumnInTableChats1720625898778 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'chats',            
            new TableColumn({
                name: 'dateIndex',
                type: 'timestamp',
                isNullable: true, 
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('chats','dateIndex')
    }

}
