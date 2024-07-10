import { MigrationInterface, QueryRunner } from "typeorm";

export class RenameColmunChatsContacId1720568799031 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.renameColumn('chats', 'contactId', 'projectId');

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.renameColumn('chats', 'projectId', 'contactId');

    }

}
