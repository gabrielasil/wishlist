import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTables1709599670027 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "category" (
        "id" integer,
        "name" varchar
      );
      
      CREATE TABLE "item" (
        "id" integer,
        "category_id" integer NOT NULL,
        "price" float,
        "store" varchar,
        "url" varchar,
        "image" blob,
        "priority" varchar,
        "bought" boolean
      );
      
      ALTER TABLE "item" ADD CONSTRAINT "item_category_id" FOREIGN KEY ("category_id") REFERENCES "category" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "item" DROP CONSTRAINT "item_category_id"`,
    );
    await queryRunner.query(`DROP TABLE "item"`);
    await queryRunner.query(`DROP TABLE "category"`);
  }
}
