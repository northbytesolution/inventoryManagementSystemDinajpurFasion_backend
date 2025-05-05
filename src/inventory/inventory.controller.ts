/* eslint-disable prettier/prettier */

import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { InventoryService } from './inventory.service';
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

@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

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
  updateLocation(@Param('id') id: string, @Body() location: Location): Promise<void> {
    return this.inventoryService.updateLocation(+id, location);
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
  updateBrand(@Param('id') id: string, @Body() brand: Brand): Promise<void> {
    return this.inventoryService.updateBrand(+id, brand);
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
  updateTag(@Param('id') id: string, @Body() tag: Tag): Promise<void> {
    return this.inventoryService.updateTag(+id, tag);
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
  updateCategory(@Param('id') id: string, @Body() category: Category): Promise<void> {
    return this.inventoryService.updateCategory(+id, category);
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
  updateAttributeItem(@Param('id') id: string, @Body() attributeItem: AttributeItem): Promise<void> {
    return this.inventoryService.updateAttributeItem(+id, attributeItem);
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
  updateItem(@Param('id') id: string, @Body() item: Item): Promise<void> {
    return this.inventoryService.updateItem(+id, item);
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
