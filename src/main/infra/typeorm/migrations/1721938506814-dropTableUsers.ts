import { MigrationInterface, QueryRunner } from "typeorm";

export class DropTableUsers1721938506814 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
  
        await queryRunner.dropTable("users")
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        
    }

}
