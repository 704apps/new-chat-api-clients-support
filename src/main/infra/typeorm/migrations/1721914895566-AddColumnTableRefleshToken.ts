import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddColumnTableRefleshToken1721914895566 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumns("refleshToken", [
            new TableColumn({
                name: "createdAt",
                type: "timestamp",
                default: "now()"
            }),
            new TableColumn( {
                name: "updatedAt",
                type: "timestamp",
                default: "now()"
            })
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumns('refleshToken', ['createdAt', 'updatedAt'])
    }


}
