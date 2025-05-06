/* eslint-disable prettier/prettier */

import { IsNotEmpty, IsString, IsOptional, IsNumber } from 'class-validator';

export class UpdateCategoryDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  slug: string;

  @IsOptional()
  @IsNumber()
  parentCategoryId?: number; 
}