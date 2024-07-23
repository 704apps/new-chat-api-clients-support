import { MigrationInterface, QueryRunner,TableColumn } from "typeorm";

export class AddColumnImageInMessage1721646188992 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumns("messages", [
            new TableColumn({
                name: "urImage",
                type: "varchar",
                isNullable: true // ou false dependendo do seu caso
            }),
          
        ]);
    }

    
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('messages','urImage')

    }

}
