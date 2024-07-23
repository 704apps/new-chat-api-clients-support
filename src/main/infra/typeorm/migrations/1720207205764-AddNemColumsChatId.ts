import { MigrationInterface, QueryRunner ,TableColumn} from "typeorm";

export class AddNemColumsChatId1720207205764 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('messages', new TableColumn({
            name:'chatId',
            type: 'varchar',
            isNullable: true,
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('messages','chatId' );

    }

}
