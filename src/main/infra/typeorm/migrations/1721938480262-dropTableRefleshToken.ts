import { MigrationInterface, QueryRunner } from "typeorm";

export class DropTableRefleshToken1721938480262 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("refleshToken");
        const foreignKey = table?.foreignKeys.find(fk => fk.columnNames.indexOf("userId") !== -1);
        if (foreignKey) {
            await queryRunner.dropForeignKey("refleshToken", foreignKey);
        }
        await queryRunner.dropTable("refleshToken");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
