import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export class AddFkMessage1723146324379 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey('messages', new TableForeignKey({
            columnNames: ['chatId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'chats',
            onDelete: 'CASCADE',
        }));

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable('messages');
        const foreignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf('chatId') !== -1);
        await queryRunner.dropForeignKey('messages', foreignKey);
    }

}
