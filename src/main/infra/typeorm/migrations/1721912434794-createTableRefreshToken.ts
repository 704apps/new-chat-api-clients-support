import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateTableRefreshToken1721912434794 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "refreshToken",
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true,        
                    isNullable: false,
                    generationStrategy: 'uuid',

                },
                {
                    name: 'expiriesIn',
                    type: 'int',
                },
                {
                    name: 'userId',
                    type: 'varchar',
                },
                {
                    name: "createdAt",
                    type: "timestamp",
                    default: "now()"
                },
                {
                    name: "updatedAt",
                    type: "timestamp",
                    default: "now()"
                },
           
            ]

        }));

        await queryRunner.createForeignKey('refreshToken',
            new TableForeignKey({
                columnNames: ["userId"],
                referencedColumnNames: ["id"],
                referencedTableName: "users",
                onDelete: "CASCADE",
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("refreshToken");
        const foreignKey = table?.foreignKeys.find(fk => fk.columnNames.indexOf("userId") !== -1);
        if (foreignKey) {
            await queryRunner.dropForeignKey("refreshToken", foreignKey);
        }
        await queryRunner.dropTable("refreshToken");
    }

}
