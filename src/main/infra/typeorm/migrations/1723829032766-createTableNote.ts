import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableNote1723829032766 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "notes",
                    columns: [
                        {
                            name: "id",
                            type: "int",
                            isPrimary: true,
                            isGenerated: true,
                            generationStrategy: 'increment'


                        },
                        {
                            name: "supportId",
                            type: "varchar",

                        },
                        {
                            name: "note",
                            type: "varchar",

                        },
                        {
                            name: "chatId",
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
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("notes")

    }

}
