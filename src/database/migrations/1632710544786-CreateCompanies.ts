import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCompanies1632710544786 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "companies",
                columns: [
                    {
                        
                    }
                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> { }
}
