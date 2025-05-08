/* eslint-disable prettier/prettier */

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable, OneToMany, CreateDateColumn, Timestamp, UpdateDateColumn } from 'typeorm';
import { Attribute } from '../attribute.entity/attribute.entity';
import { Tag } from '../tag.entity/tag.entity';
import { Lot } from '../lot.entity/lot.entity';
import { Brand } from '../brand.entity/brand.entity';
import { Location } from '../location.entity/location.entity';
import { Category } from '../category.entity/category.entity';
import { ItemVariation } from '../item-variation.entity/item-variation.entity';
import { Supplier } from '../supplier.entity/supplier.entity';  

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  sku: string;

  @Column()
  slug: string;

  @Column()
  barcode: string;

  @CreateDateColumn()
  created: Timestamp;

  @UpdateDateColumn()
  updated: Timestamp;

  @Column()
  quantity: number;

  @Column({type:'decimal', precision:10, scale:2, default: 0})
  purchasePrice: number;

  @Column({type:'decimal', precision:10, scale:2, default: 0})
  sellingPrice: number;

  @Column({type:'decimal', precision:10, scale:2, default: 0})
  discountPrice: number;

  @Column()
  discount: number;

  @Column('simple-array')
  images: string[]

  // @ManyToOne(() => Image, image => image.items)
  // image: Image;

  @ManyToOne(() => Location, location => location.items)
  location: Location;

  @ManyToOne(() => Lot, lot => lot.items, { nullable: true })
  lot: Lot;

  @ManyToOne(() => Brand, brand => brand.items)
  brand: Brand;

  @ManyToOne(() => Supplier, supplier => supplier.items)
  supplier: Supplier;

  @ManyToMany(() => Attribute)
  @JoinTable()
  attributes: Attribute[];

  @ManyToOne(() => Category, category => category.items)
  category: Category;

  @ManyToMany(() => Tag)
  @JoinTable()
  tags: Tag[];

  @ManyToMany(() => Item)
  @JoinTable()
  relatedItems: Item[];

  @OneToMany(() => ItemVariation, variation => variation.item)
  variations: ItemVariation[];


}
