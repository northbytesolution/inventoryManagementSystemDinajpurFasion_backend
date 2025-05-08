import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1746673294264 implements MigrationInterface {
    name = 'Initial1746673294264'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "lot" ("id" SERIAL NOT NULL, "lot_no" character varying NOT NULL, "name" character varying NOT NULL, "created" TIMESTAMP NOT NULL DEFAULT now(), "total_quantity" integer NOT NULL, CONSTRAINT "PK_2ba293e2165c7b93cd766c8ac9b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "item" ADD "lotId" integer`);
        await queryRunner.query(`ALTER TABLE "item" ADD CONSTRAINT "FK_f0b8a9f98ce34e11cd796869f3e" FOREIGN KEY ("lotId") REFERENCES "lot"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" DROP CONSTRAINT "FK_f0b8a9f98ce34e11cd796869f3e"`);
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "lotId"`);
        await queryRunner.query(`DROP TABLE "lot"`);
    }

}
