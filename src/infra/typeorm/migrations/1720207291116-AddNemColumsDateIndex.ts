import { MigrationInterface, QueryRunner ,TableColumn} from "typeorm";

export class AddNemColumsDateIndex1720207291116 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('messages', new TableColumn({
            name:'dateIndex',
            type: 'date',
            isNullable: true,
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('messages','dateIndex' );

    }

}
