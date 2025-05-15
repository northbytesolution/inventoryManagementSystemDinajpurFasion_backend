/* eslint-disable prettier/prettier */


import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Invoice } from './invoice.entity';
import { Item } from '../item.entity/item.entity';

@Entity()
export class InvoiceItem {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Invoice, invoice => invoice.items)
  invoice: Invoice;

  @ManyToOne(() => Item, item => item.invoiceItems)
  item: Item;

  @Column()
  item_name: string;

  @Column('decimal')
  price: number;

  @Column('decimal')
  sales_discount: number;

  @Column('int')
  qty: number;

  @Column({ default: false })
  is_returned: boolean;

  @Column({ default: false })
  is_refund: boolean;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
