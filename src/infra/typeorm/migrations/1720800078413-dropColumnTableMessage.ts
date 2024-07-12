import { MigrationInterface, QueryRunner ,TableColumn} from "typeorm";

export class DropColumnTableMessage1720800078413 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("messages", "socketId");

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("messages", new TableColumn({
            name: "socketId",
            type: "varchar"
            // Defina outros parâmetros da coluna, como nullable, default, etc.
        }));
    }

}
