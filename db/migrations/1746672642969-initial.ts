import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1746672642969 implements MigrationInterface {
    name = 'Initial1746672642969'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" ADD "supplierId" integer`);
        await queryRunner.query(`ALTER TABLE "item" ADD CONSTRAINT "FK_e7c44eae41483213a380f4c57c5" FOREIGN KEY ("supplierId") REFERENCES "supplier"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" DROP CONSTRAINT "FK_e7c44eae41483213a380f4c57c5"`);
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "supplierId"`);
    }

}
