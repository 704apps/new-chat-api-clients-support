import { MigrationInterface, QueryRunner,  TableColumn } from "typeorm";

export class AddColumnMessage1719845235519 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('messages', new TableColumn({
            name:'projectId',
            type:'varchar',
            isNullable: true
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('messages','projectId');
    }

}
