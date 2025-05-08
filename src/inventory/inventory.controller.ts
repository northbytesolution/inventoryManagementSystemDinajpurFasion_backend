/* eslint-disable prettier/prettier */

import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { Lot } from './entities/lot.entity/lot.entity';
import { CreateLotDto } from './dto/create-lot.dto';
import { UpdateLotDto } from './dto/update-lot.dto';
import { Supplier } from './entities/supplier.entity/supplier.entity';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { Attribute } from './entities/attribute.entity/attribute.entity';
import { AttributeItem } from './entities/attribute-item.entity/attribute-item.entity';
import { Location } from './entities/location.entity/location.entity';
import { Brand } from './entities/brand.entity/brand.entity';
import { Tag } from './entities/tag.entity/tag.entity';
import { Category } from './entities/category.entity/category.entity';
import { Item } from './entities/item.entity/item.entity';
import { ItemVariation } from './entities/item-variation.entity/item-variation.entity';
import { CreateBrandDto } from './dto/create-brand.dto';
import { CreateTagDto } from './dto/create-tag.dto';
import { CreateCategoryDto } from './dto/create-category.dto';
import { CreateLocationDto } from './dto/create-location.dto';
import { AuthenticationGuard } from 'src/utility/guards/authentication.guard';
import { AuthorizedGuard } from 'src/utility/guards/authorization.guard';
import { Roles } from 'src/utility/common/user-role.enum';
import { CreateItemDto } from './dto/create-item.dto';
import { CreateAttributeDto } from './dto/create-attribute.dto';
import { CreateAttributeItemDto } from './dto/create-attributeItem.dto';
import { UpdateAttributeDto } from './dto/update-attribute.dto';
import { UpdateAttributeItemDto } from './dto/update-attributeItem.dto';
import { UpdateBrandDto } from './dto/updated-brand.dto';
import { UpdateTagDto } from './dto/updated-tag.dto';
import { UpdateLocationDto } from './dto/updated-location.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { UpdateItemDto } from './dto/updated-item.dto';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  // ############# Lot endpoints #############
  @UseGuards(AuthenticationGuard,AuthorizedGuard([Roles.ADMIN]))
  @Get('lot')
  findAllLot(): Promise<Lot[]> {
    return this.inventoryService.findAllLots();
  }

  @UseGuards(AuthenticationGuard,AuthorizedGuard([Roles.ADMIN]))
  @Get('lot/:id')
  findOneLot(@Param('id') id: string): Promise<Lot> {
    return this.inventoryService.findOneLot(+id);
  }

  @UseGuards(AuthenticationGuard,AuthorizedGuard([Roles.ADMIN]))
  @Post('lot')
  createLot(@Body() createLotDto: CreateLotDto): Promise<Lot> {
    return this.inventoryService.createLot(createLotDto);
  }

  @UseGuards(AuthenticationGuard,AuthorizedGuard([Roles.ADMIN]))
  @Put('lot/:id')
  updateLot(@Param('id') id: string, @Body() updateLotDto: UpdateLotDto): Promise<void> {
    return this.inventoryService.updateLot(+id, updateLotDto);
  }

  @UseGuards(AuthenticationGuard,AuthorizedGuard([Roles.ADMIN]))
  @Delete('lot/:id')
  removeLot(@Param('id') id: string): Promise<void> {
    return this.inventoryService.removeLot(+id);
  }

  // ############# Supplier endpoints #############
  @UseGuards(AuthenticationGuard,AuthorizedGuard([Roles.ADMIN]))
  @Get('supplier')
  findAllSupplier(): Promise<Supplier[]> {
    return this.inventoryService.findAllSuppliers();
  }

  @UseGuards(AuthenticationGuard,AuthorizedGuard([Roles.ADMIN]))
  @Get('supplier/:id')
  findOneSupplier(@Param('id') id: string): Promise<Supplier> {
    return this.inventoryService.findOneSupplier(+id);
  }

  @UseGuards(AuthenticationGuard,AuthorizedGuard([Roles.ADMIN]))
  @Post('supplier')
  createSupplier(@Body() createSupplierDto: CreateSupplierDto): Promise<Supplier> {
    return this.inventoryService.createSupplier(createSupplierDto);
  }

  @UseGuards(AuthenticationGuard,AuthorizedGuard([Roles.ADMIN]))
  @Put('supplier/:id')
  updateSupplier(@Param('id') id: string, @Body() updateSupplierDto: UpdateSupplierDto): Promise<void> {
    return this.inventoryService.updateSupplier(+id, updateSupplierDto);
  }

  @UseGuards(AuthenticationGuard,AuthorizedGuard([Roles.ADMIN]))
  @Delete('supplier/:id')
  removeSupplier(@Param('id') id: string): Promise<void> {
    return this.inventoryService.removeSupplier(+id);
  }



  // #############  location endpoints #############

  @UseGuards(AuthenticationGuard,AuthorizedGuard([Roles.ADMIN]))
  @Get('location')
  findAllLocation(): Promise<Location[]> {
    return this.inventoryService.findAllLocation();
  }

  @UseGuards(AuthenticationGuard,AuthorizedGuard([Roles.ADMIN]))
  @Get('location/:id')
  findOneLocation(@Param('id') id: string): Promise<Location> {
    return this.inventoryService.findOneLocation(+id);
  }

  @UseGuards(AuthenticationGuard,AuthorizedGuard([Roles.ADMIN]))
  @Post('location')
  async createLocation(@Body() createLocationDto: CreateLocationDto): Promise<Location> {
    return await this.inventoryService.createLocation(createLocationDto);
  }

  @UseGuards(AuthenticationGuard,AuthorizedGuard([Roles.ADMIN]))
  @Put('location/:id')
  updateLocation(@Param('id') id: string, @Body() UpdateLocationDto: UpdateLocationDto): Promise<void> {
    return this.inventoryService.updateLocation(+id, UpdateLocationDto);
  }

  @UseGuards(AuthenticationGuard,AuthorizedGuard([Roles.ADMIN]))
  @Delete('location/:id')
  removeLocation(@Param('id') id: string): Promise<void> {
    return this.inventoryService.removeLocation(+id);
  }

  // ############# Brand endpoints #############

  @UseGuards(AuthenticationGuard,AuthorizedGuard([Roles.ADMIN]))
  @Get('brand')
  findAllBrand(): Promise<Brand[]> {
    return this.inventoryService.findAllBrand();
  }

  @UseGuards(AuthenticationGuard,AuthorizedGuard([Roles.ADMIN]))
  @Get('brand/:id')
  findOneBrand(@Param('id') id: string): Promise<Brand> {
    return this.inventoryService.findOneBrand(+id);
  }

  @UseGuards(AuthenticationGuard,AuthorizedGuard([Roles.ADMIN]))
  @Post('brand')
  createBrand(@Body() createBrandDto: CreateBrandDto): Promise<Brand> {
    return this.inventoryService.createBrand(createBrandDto);
  }

  @UseGuards(AuthenticationGuard,AuthorizedGuard([Roles.ADMIN]))
  @Put('brand/:id')
  updateBrand(@Param('id') id: string, @Body() UpdateBrandDto: UpdateBrandDto): Promise<void> {
    return this.inventoryService.updateBrand(+id, UpdateBrandDto);
  }

  @UseGuards(AuthenticationGuard,AuthorizedGuard([Roles.ADMIN]))
  @Delete('brand/:id')
  removeBrand(@Param('id') id: string): Promise<void> {
    return this.inventoryService.removeBrand(+id);
  }

  // ##################  tag endpoints #################

  @UseGuards(AuthenticationGuard,AuthorizedGuard([Roles.ADMIN]))
  @Get('tag')
  findAllTag(): Promise<Tag[]> {
    return this.inventoryService.findAllTag();
  }

  @UseGuards(AuthenticationGuard,AuthorizedGuard([Roles.ADMIN]))
  @Get('tag/:id')
  findOneTag(@Param('id') id: string): Promise<Tag> {
    return this.inventoryService.findOneTag(+id);
  }

  @UseGuards(AuthenticationGuard,AuthorizedGuard([Roles.ADMIN]))
  @Post('tag')
  createTag(@Body() createTagDto: CreateTagDto): Promise<Tag> {
    return this.inventoryService.createTag(createTagDto);
  }

  @UseGuards(AuthenticationGuard,AuthorizedGuard([Roles.ADMIN]))
  @Put('tag/:id')
  updateTag(@Param('id') id: string, @Body() updateTagDto: UpdateTagDto): Promise<void> {
    return this.inventoryService.updateTag(+id, updateTagDto);
  }

  @UseGuards(AuthenticationGuard,AuthorizedGuard([Roles.ADMIN]))
  @Delete('tag/:id')
  removeTag(@Param('id') id: string): Promise<void> {
    return this.inventoryService.removeTag(+id);
  }

  // ################## Category endpoints ##################
  @UseGuards(AuthenticationGuard,AuthorizedGuard([Roles.ADMIN]))
  @Get('categories')
  findAllCategories(): Promise<Category[]> {
    return this.inventoryService.findAllCategories();
  }

  @UseGuards(AuthenticationGuard,AuthorizedGuard([Roles.ADMIN]))
  @Get('categories/:id')
  findOneCategory(@Param('id') id: string): Promise<Category> {
    return this.inventoryService.findOneCategory(+id);
  }

  @UseGuards(AuthenticationGuard,AuthorizedGuard([Roles.ADMIN]))
  @Post('categories')
  createCategory(@Body() createCategoryDto: CreateCategoryDto): Promise<Category> {
    return this.inventoryService.createCategory(createCategoryDto);
  }

  @UseGuards(AuthenticationGuard,AuthorizedGuard([Roles.ADMIN]))
  @Put('categories/:id')
  updateCategory(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto): Promise<void> {
    return this.inventoryService.updateCategory(+id, updateCategoryDto);
  }

  @UseGuards(AuthenticationGuard,AuthorizedGuard([Roles.ADMIN]))
  @Delete('categories/:id')
  removeCategory(@Param('id') id: string): Promise<void> {
    return this.inventoryService.removeCategory(+id);
  }

  // ################## Attribute endpoints #################
  @UseGuards(AuthenticationGuard,AuthorizedGuard([Roles.ADMIN]))
  @Get('attributes')
  findAllAttributes(): Promise<Attribute[]> {
    return this.inventoryService.findAllAttributes();
  }

  @UseGuards(AuthenticationGuard,AuthorizedGuard([Roles.ADMIN]))
  @Get('attributes/:id')
  findOneAttribute(@Param('id') id: string): Promise<Attribute> {
    return this.inventoryService.findOneAttribute(+id);
  }

  @UseGuards(AuthenticationGuard,AuthorizedGuard([Roles.ADMIN]))
  @Post('attributes')
  createAttribute(@Body() createAttributeDto: CreateAttributeDto): Promise<Attribute> {
    return this.inventoryService.createAttribute(createAttributeDto);
  }

  @UseGuards(AuthenticationGuard,AuthorizedGuard([Roles.ADMIN]))
  @Put('attributes/:id')
  updateAttribute(
    @Param('id') id: string,
    @Body() updateAttributeDto: UpdateAttributeDto,
  ): Promise<void> {
    return this.inventoryService.updateAttribute(+id, updateAttributeDto);
  }

  @UseGuards(AuthenticationGuard,AuthorizedGuard([Roles.ADMIN]))
  @Delete('attributes/:id')
  removeAttribute(@Param('id') id: string): Promise<void> {
    return this.inventoryService.removeAttribute(+id);
  }

  // ################### AttributeItem endpoints #################
  @UseGuards(AuthenticationGuard,AuthorizedGuard([Roles.ADMIN]))
  @Get('attribute-items')
  findAllAttributeItems(): Promise<AttributeItem[]> {
    return this.inventoryService.findAllAttributeItems();
  }

  @UseGuards(AuthenticationGuard,AuthorizedGuard([Roles.ADMIN]))
  @Get('attribute-items/:id')
  findOneAttributeItem(@Param('id') id: string): Promise<AttributeItem> {
    return this.inventoryService.findOneAttributeItem(+id);
  }

  @UseGuards(AuthenticationGuard,AuthorizedGuard([Roles.ADMIN]))
  @Post('attribute-items')
  createAttributeItem(@Body() createAttributeItemDto: CreateAttributeItemDto): Promise<AttributeItem> {
    return this.inventoryService.createAttributeItem(createAttributeItemDto);
  }

  @UseGuards(AuthenticationGuard,AuthorizedGuard([Roles.ADMIN]))
  @Put('attribute-items/:id')
  updateAttributeItem(@Param('id') id: string, @Body() updateAttributeItem: UpdateAttributeItemDto): Promise<void> {
    return this.inventoryService.updateAttributeItem(+id, updateAttributeItem);
  }

  @UseGuards(AuthenticationGuard,AuthorizedGuard([Roles.ADMIN]))
  @Delete('attribute-items/:id')
  removeAttributeItem(@Param('id') id: string): Promise<void> {
    return this.inventoryService.removeAttributeItem(+id);
  }


  // Item endpoints
  @UseGuards(AuthenticationGuard,AuthorizedGuard([Roles.ADMIN]))
  @Get('items')
  findAllItems(): Promise<Item[]> {
    return this.inventoryService.findAllItems();
  }

  @UseGuards(AuthenticationGuard,AuthorizedGuard([Roles.ADMIN]))
  @Get('items/:id')
  findOneItem(@Param('id') id: string): Promise<Item> {
    return this.inventoryService.findOneItem(+id);
  }

  @UseGuards(AuthenticationGuard,AuthorizedGuard([Roles.ADMIN]))
  @Post('items')
  createItem(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.inventoryService.createItem(createItemDto);
  }

  @UseGuards(AuthenticationGuard,AuthorizedGuard([Roles.ADMIN]))
  @Put('items/:id')
  updateItem(@Param('id') id: string, @Body() updateItemDto: UpdateItemDto): Promise<void> {
    return this.inventoryService.updateItem(+id, updateItemDto);
  }

  @UseGuards(AuthenticationGuard,AuthorizedGuard([Roles.ADMIN]))
  @Delete('items/:id')
  removeItem(@Param('id') id: string): Promise<void> {
    return this.inventoryService.removeItem(+id);
  }

  // ItemVariation endpoints
  @UseGuards(AuthenticationGuard,AuthorizedGuard([Roles.ADMIN]))
  @Get('item-variations')
  findAllItemVariations(): Promise<ItemVariation[]> {
    return this.inventoryService.findAllItemVariations();
  }

  @UseGuards(AuthenticationGuard,AuthorizedGuard([Roles.ADMIN]))
  @Get('item-variations/:id')
  findOneItemVariation(@Param('id') id: string): Promise<ItemVariation> {
    return this.inventoryService.findOneItemVariation(+id);
  }

  @UseGuards(AuthenticationGuard,AuthorizedGuard([Roles.ADMIN]))
  @Post('item-variations')
  createItemVariation(@Body() itemVariation: ItemVariation): Promise<ItemVariation> {
    return this.inventoryService.createItemVariation(itemVariation);
  }

  @UseGuards(AuthenticationGuard,AuthorizedGuard([Roles.ADMIN]))
  @Put('item-variations/:id')
  updateItemVariation(@Param('id') id: string, @Body() itemVariation: ItemVariation): Promise<void> {
    return this.inventoryService.updateItemVariation(+id, itemVariation);
  }

  @UseGuards(AuthenticationGuard,AuthorizedGuard([Roles.ADMIN]))
  @Delete('item-variations/:id')
  removeItemVariation(@Param('id') id: string): Promise<void> {
    return this.inventoryService.removeItemVariation(+id);
  }



}
