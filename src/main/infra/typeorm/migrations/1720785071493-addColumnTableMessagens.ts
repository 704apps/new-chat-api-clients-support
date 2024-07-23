import { MigrationInterface, QueryRunner,TableColumn } from "typeorm";

export class AddColumnTableMessagens1720785071493 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumns("messages", [
            new TableColumn({
                name: "chatId",
                type: "varchar",
                isNullable: true // ou false dependendo do seu caso
            }),
            new TableColumn({
                name: "sender",
                type: "int",
                isNullable: false, // ou true dependendo do seu caso
                default: 0 // se aplicável
            })
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumns('messages',['chatId','sender'])
    }

}
