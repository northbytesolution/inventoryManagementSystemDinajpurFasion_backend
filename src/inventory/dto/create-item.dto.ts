/* eslint-disable prettier/prettier */

import { IsNotEmpty, IsString, IsNumber, IsArray, IsOptional, IsDecimal } from 'class-validator';

export class CreateItemDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  sku: string;

  @IsNotEmpty()
  @IsString()
  slug: string;

  @IsNotEmpty()
  @IsString()
  barcode: string;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @IsNotEmpty()
  @IsDecimal()
  purchasePrice: number;

  @IsNotEmpty()
  @IsDecimal()
  sellingPrice: number;

  @IsOptional()
  @IsDecimal()
  discountPrice?: number;

  @IsOptional()
  @IsNumber()
  discount?: number;

  @IsArray()
  @IsString({ each: true })
  images: string[];

  @IsNotEmpty()
  @IsNumber()
  locationId: number;

  @IsNotEmpty()
  @IsNumber()
  brandId: number;

  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  attributeIds?: number[];

  @IsNotEmpty()
  @IsNumber()
  categoryId: number;

  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  tagIds?: number[];

  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  relatedItemIds?: number[];
}