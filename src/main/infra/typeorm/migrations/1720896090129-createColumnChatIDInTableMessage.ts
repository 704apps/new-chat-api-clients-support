import { MigrationInterface, QueryRunner ,TableColumn} from "typeorm";

export class CreateColumnChatIDInTableMessage1720896090129 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumn(
            "messages", 
            "chatId",
            new TableColumn({
                name: "chatId",
                type: "int",
                isNullable: true // ou false dependendo do seu caso
            }),
          
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropColumn("messages","chatId")
    }

}
