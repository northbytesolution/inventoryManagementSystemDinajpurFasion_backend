/* eslint-disable prettier/prettier */

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
// import { Item, Location, Supplier, Image } from './';
import { Item } from '../item.entity/item.entity';
import { AttributeItem } from '../attribute-item.entity/attribute-item.entity';
import { Location } from '../location.entity/location.entity';


@Entity()
export class ItemVariation {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Item, item => item.variations)
  item: Item;

  @ManyToMany(() => AttributeItem)
  @JoinTable()
  attributes: AttributeItem[];

  @Column()
  name: string;

  @Column()
  created: Date;

  @ManyToOne(() => Location, location => location.itemVariations)
  location: Location;

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

  @Column()
  barcode: string;

  generateBarcode(itemId: number, attributes?: AttributeItem[]): string {
    const attrPart = attributes ? attributes.map(a => a.id).join('') : '0';
    return `${itemId}${100000}${attrPart}${100}`;
  }

}
