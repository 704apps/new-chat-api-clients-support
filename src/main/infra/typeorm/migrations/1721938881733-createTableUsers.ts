import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableUsers1721938881733 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "users",
                    columns: [
                        {
                            name: 'id',
                            type: 'varchar',
                            isPrimary: true,
        
                            isNullable: false,

                        },
                        {
                            name:"name",
                            type: "varchar",
                            
                        },
                        {
                            name:"email",
                            type: "varchar",
                            
                        }, 
                        {
                            name:"password",
                            type: "varchar",
                            
                        },                    
                        {
                            name:"createdAt",
                            type: "timestamp",
                            default: "now()"
                        },                    
                        {
                            name:"updatedAt",
                            type: "timestamp",
                            default: "now()"
                        }, 

                    ]                
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users")
    }

}
