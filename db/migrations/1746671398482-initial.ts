import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1746671398482 implements MigrationInterface {
    name = 'Initial1746671398482'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "supplier" ("id" SERIAL NOT NULL, "name" character varying(255), "email" character varying(255), "phone" character varying(255), "emergency_contact" character varying(255), "address" character varying(500), "Type" character varying(255), "remarks" character varying(550), "account_balance" numeric(20,2) DEFAULT '0', "points" character varying(550), "Special_Date_Type" character varying(255), "special_dates" TIMESTAMP, "is_active" boolean DEFAULT true, "is_wholesale" boolean DEFAULT true, "data" json, CONSTRAINT "PK_2bc0d2cab6276144d2ff98a2828" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "supplier"`);
    }

}
