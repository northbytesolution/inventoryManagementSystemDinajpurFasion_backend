import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1747469779760 implements MigrationInterface {
    name = 'Initial1747469779760'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "customer" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "phone" character varying NOT NULL, "address" character varying, CONSTRAINT "PK_a7a13f4cacb744524e44dfdad32" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "invoice" ("id" SERIAL NOT NULL, "inv_no" character varying NOT NULL, "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "bill" numeric NOT NULL, "discount" numeric NOT NULL, "paid_amount" numeric NOT NULL, "due_amount" numeric NOT NULL, "grand_total" numeric NOT NULL, "status" character varying NOT NULL, "vat" numeric NOT NULL, "shipping_address" character varying NOT NULL, "order_type" character varying NOT NULL, "delivery_charge" numeric NOT NULL, "delivery_cost" numeric NOT NULL, "remarks" character varying, "customerId" integer, CONSTRAINT "PK_15d25c200d9bcd8a33f698daf18" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "invoice_item" ("id" SERIAL NOT NULL, "item_name" character varying NOT NULL, "price" numeric NOT NULL, "sales_discount" numeric NOT NULL, "qty" integer NOT NULL, "is_returned" boolean NOT NULL DEFAULT false, "is_refund" boolean NOT NULL DEFAULT false, "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "invoiceId" integer, "itemId" integer, CONSTRAINT "PK_621317346abdf61295516f3cb76" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "invoice" ADD CONSTRAINT "FK_925aa26ea12c28a6adb614445ee" FOREIGN KEY ("customerId") REFERENCES "customer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "invoice_item" ADD CONSTRAINT "FK_553d5aac210d22fdca5c8d48ead" FOREIGN KEY ("invoiceId") REFERENCES "invoice"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "invoice_item" ADD CONSTRAINT "FK_5cb01bdc22384044d77f791d3d0" FOREIGN KEY ("itemId") REFERENCES "item"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "invoice_item" DROP CONSTRAINT "FK_5cb01bdc22384044d77f791d3d0"`);
        await queryRunner.query(`ALTER TABLE "invoice_item" DROP CONSTRAINT "FK_553d5aac210d22fdca5c8d48ead"`);
        await queryRunner.query(`ALTER TABLE "invoice" DROP CONSTRAINT "FK_925aa26ea12c28a6adb614445ee"`);
        await queryRunner.query(`DROP TABLE "invoice_item"`);
        await queryRunner.query(`DROP TABLE "invoice"`);
        await queryRunner.query(`DROP TABLE "customer"`);
    }

}
