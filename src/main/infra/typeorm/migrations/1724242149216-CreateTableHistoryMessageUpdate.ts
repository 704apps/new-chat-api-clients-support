import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateTableHistoryMessageUpdate1724242149216 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "oldMessage",
                    columns: [
                        {
                            name: "id",
                            type: "int",
                            isPrimary: true,
                            isGenerated: true,
                            generationStrategy: 'increment'


                        },
                        {
                            name: "idMessage",
                            type: "int",

                        },
                        {
                            name: "oldMessage",
                            type: "varchar",

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
                }
            )
        ),
        await queryRunner.createForeignKey('oldMessage', new TableForeignKey({
            columnNames: ['idMessage'],
            referencedColumnNames: ['id'],
            referencedTableName: 'messages',
            onDelete: 'CASCADE',
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable('oldMessage');
        const foreignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf('idMessage') !== -1);
        await queryRunner.dropForeignKey('oldMessage', foreignKey);

    }

}
