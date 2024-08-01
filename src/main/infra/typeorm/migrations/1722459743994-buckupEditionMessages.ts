import { MigrationInterface, QueryRunner, Table ,TableForeignKey} from "typeorm";

export class BuckupEditionMessages1722459743994 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "buckupEditionMessage",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'

                },
                {
                    name: 'messageId',
                    type: 'int',
                },
                {
                    name: 'action',
                    type: 'varchar',
                },
                {
                    name: 'message',
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

        await queryRunner.createForeignKey('buckupEditionMessage',
            new TableForeignKey({
                columnNames: ["messageId"],
                referencedColumnNames: ["id"],
                referencedTableName: "messages",
                onDelete: "CASCADE",
            })
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("buckupEditionMessage");
        const foreignKey = table?.foreignKeys.find(fk => fk.columnNames.indexOf("messageId") !== -1);
        if (foreignKey) {
            await queryRunner.dropForeignKey("buckupEditionMessage", foreignKey);
        }
        await queryRunner.dropTable("buckupEditionMessage");

    }

}
