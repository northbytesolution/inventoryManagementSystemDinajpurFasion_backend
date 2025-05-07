import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1746601893172 implements MigrationInterface {
    name = 'Initial1746601893172'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "contact" ("id" SERIAL NOT NULL, "name" character varying(255), "email" character varying(255), "phone" character varying(255), "emergency_contact" character varying(255), "address" character varying(500), "Type" character varying(255), "remarks" character varying(550), "account_balance" numeric(20,2) DEFAULT '0', "points" character varying(550), "Special_Date_Type" character varying(255), "special_dates" TIMESTAMP, "is_active" boolean DEFAULT true, "is_wholesale" boolean DEFAULT true, "data" json, CONSTRAINT "PK_2cbbe00f59ab6b3bb5b8d19f989" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "contact"`);
    }

}
