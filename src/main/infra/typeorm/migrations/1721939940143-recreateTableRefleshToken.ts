import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class RecreateTableRefleshToken1721939940143 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "refleshToken",
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true,

                    isNullable: false,
               
                },
                {
                    name: 'expiriesIn',
                    type: 'int',
                },
                {
                    name: 'userId',
                    type: 'varchar',
                }
            ]

        }));
        await queryRunner.createForeignKey('refleshToken',
            new TableForeignKey({
                columnNames: ["userId"],
                referencedColumnNames: ["id"],
                referencedTableName: "users",
                onDelete: "CASCADE",
            })
        )
      
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("refleshToken");
        const foreignKey = table?.foreignKeys.find(fk => fk.columnNames.indexOf("userId") !== -1);
        if (foreignKey) {
            await queryRunner.dropForeignKey("refleshToken", foreignKey);
        }
        await queryRunner.dropTable("refleshToken");
    }

}
