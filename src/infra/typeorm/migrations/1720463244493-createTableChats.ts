import { MigrationInterface, QueryRunner ,Table} from "typeorm";

export class CreateTableChats1720463244493 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(

            new Table(
                {
                    name: "chats",
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
                            name: "contactId",
                            type: "varchar",
          
                        },
                        {
                            name: "statusAttention",
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
        ))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("chats")
    }

}
