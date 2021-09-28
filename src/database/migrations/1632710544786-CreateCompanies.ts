import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCompanies1632710544786 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "companies",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "fantasy_name",
            type: "varchar",
          },
          {
            name: "social_name",
            type: "varchar",
          },
          {
            name: "cnpj",
            type: "varchar",
          },
          {
            name: "type_company",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("companies");
  }
}
