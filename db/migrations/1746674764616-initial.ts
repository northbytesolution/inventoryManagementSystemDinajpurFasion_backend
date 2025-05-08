import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1746674764616 implements MigrationInterface {
    name = 'Initial1746674764616'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lot" ALTER COLUMN "lot_no" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "lot" ALTER COLUMN "total_quantity" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lot" ALTER COLUMN "total_quantity" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "lot" ALTER COLUMN "lot_no" SET NOT NULL`);
    }

}
