import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTables1709599670027 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "category" (
        "id" SERIAL PRIMARY KEY,
        "name" VARCHAR
      )
      `);
    await queryRunner.query(`CREATE TABLE "item" (
        "id" SERIAL PRIMARY KEY,
        "category_id" INTEGER NOT NULL,
        "price" FLOAT NOT NULL,
        "store" VARCHAR,
        "url" VARCHAR,
        "image" BYTEA,
        "priority" VARCHAR,
        "bought" BOOLEAN NOT NULL DEFAULT false
      );`);
    await queryRunner.query(
      `ALTER TABLE "item" ADD CONSTRAINT "item_category_id" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "item" DROP CONSTRAINT "item_category_id"`,
    );
    await queryRunner.query(`DROP TABLE "item"`);
    await queryRunner.query(`DROP TABLE "category"`);
  }
}
