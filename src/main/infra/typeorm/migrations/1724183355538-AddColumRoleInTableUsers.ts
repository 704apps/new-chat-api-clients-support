import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddColumRoleInTableUsers1724183355538 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('users', new TableColumn({
            name:'role',
            type:'varchar',
            isNullable: false
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('messages','projectId');

    }

}
