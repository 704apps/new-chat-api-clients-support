import { MigrationInterface, QueryRunner, Table } from "typeorm";


export class Messages1719582222042 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
<<<<<<< HEAD
                {
=======
            {
>>>>>>> 7da09229f85a724767277c4a9df3fb570d59823a
                    name: "messages",
                    columns: [
                        {
                            name: "id",
                            type: "int",
                            isPrimary: true,
                            isGenerated: true,
                            generationStrategy: 'increment'

                        },
                        {
                            name: "userType",
                            type: "varchar",

                        },
                        {
                            name: "socketId",
                            type: "varchar",

                        },
                        {
                            name: "messageType",
                            type: "varchar",

                        },
                        {
                            name: "messages",
                            type: "varchar",

                        },
                        {
                            name: "orige",
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
        await queryRunner.dropTable("messages")
    }

}
