/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Attribute } from './entities/attribute.entity/attribute.entity';
import { AttributeItem } from './entities/attribute-item.entity/attribute-item.entity';
import { Location } from './entities/location.entity/location.entity';
import { Category } from './entities/category.entity/category.entity';
import { Brand } from './entities/brand.entity/brand.entity';
import { Tag } from './entities/tag.entity/tag.entity';
import { Item } from './entities/item.entity/item.entity';
import { ItemVariation } from './entities/item-variation.entity/item-variation.entity';
import { CreateBrandDto } from './dto/create-brand.dto';
import { CreateTagDto } from './dto/create-tag.dto';
import { CreateCategoryDto } from './dto/create-category.dto';
import { CreateLocationDto } from './dto/create-location.dto';
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


@Injectable()
export class InventoryService {
  constructor(
    @InjectRepository(Attribute)
    private attributeRepository: Repository<Attribute>,
    @InjectRepository(AttributeItem)
    private attributeItemRepository: Repository<AttributeItem>,
    @InjectRepository(Location)
    private locationRepository: Repository<Location>,
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
    @InjectRepository(Brand)
    private brandRepository: Repository<Brand>,
    @InjectRepository(Tag)
    private tagRepository: Repository<Tag>,
    @InjectRepository(Item)
    private itemRepository: Repository<Item>,
    @InjectRepository(ItemVariation)
    private itemVariationRepository: Repository<ItemVariation>,
  ) {}

    //  #################### Location methods ####################
    async findAllLocation(): Promise<Location[]> {
      return this.locationRepository.find();
    }

    async findOneLocation(id: number): Promise<Location> {
      return this.locationRepository.findOne({ where: { id } });
    }

    async createLocation(createLocationDto: CreateLocationDto): Promise<Location> {
      const location = new Location();
      location.name = createLocationDto.name;
      location.type = createLocationDto.type;
      return this.locationRepository.save(location);
    }

    async updateLocation(id: number, updateData: UpdateLocationDto): Promise<void> {
      if (!Object.keys(updateData).length) {
        throw new Error('No update values provided');
      }
      await this.locationRepository.update(id, updateData);
    }

    async removeLocation(id: number): Promise<void> {
      await this.locationRepository.delete(id);
    }

    //  #################### Brand methods ####################
    async findAllBrand(): Promise<Brand[]> {
      return this.brandRepository.find();
    }

    async findOneBrand(id: number): Promise<Brand> {
      return this.brandRepository.findOne({ where: { id } });
    }

    async createBrand(createBrandDto: CreateBrandDto): Promise<Brand> {
      const brand = new Brand();
      brand.name = createBrandDto.name;
      brand.slug = createBrandDto.slug;
      return this.brandRepository.save(brand);
    }

    async updateBrand(id: number, updateData: UpdateBrandDto): Promise<void> {
      if (!Object.keys(updateData).length) {
        throw new Error('No update values provided');
      }
      await this.brandRepository.update(id, updateData);
    }

    async removeBrand(id: number): Promise<void> {
      await this.brandRepository.delete(id);
    }


    //  #################### Tag methods ####################
    async findAllTag(): Promise<Tag[]> {
      return this.tagRepository.find();
    }

    async findOneTag(id: number): Promise<Tag> {
      return this.tagRepository.findOne({ where: { id } });
    }

    async createTag(createTagDto: CreateTagDto): Promise<Tag> {
      const tag = new Tag();
      tag.name = createTagDto.name;
      tag.slug = createTagDto.slug;
      return this.tagRepository.save(tag);
    }

    async updateTag(id: number, updateData: UpdateTagDto): Promise<void> {
      if (!Object.keys(updateData).length) {
        throw new Error('No update values provided');
      }
      await this.tagRepository.update(id, updateData);
    }

    async removeTag(id: number): Promise<void> {
      await this.tagRepository.delete(id);
    }

    //  #################### Category methods ####################
    async findAllCategories(): Promise<Category[]> {
      const categories = await this.categoryRepository.find({ relations: ["parentCategory"] });
  
      const categoryMap = new Map<number, Category>();
  
      categories.forEach(category => {
          categoryMap.set(category.id, { ...category, children: [] });
      });
  
      categories.forEach(category => {
          if (category.parentCategoryId) {
              const parent = categoryMap.get(category.parentCategoryId);
              if (parent) {
                  parent.children.push(categoryMap.get(category.id));
              }
          }
      });
  
      return categories.filter(category => !category.parentCategoryId).map(category => categoryMap.get(category.id));
  }
  
  
    async findOneCategory(id: number): Promise<Category> {
      return this.categoryRepository.findOne({ where: { id } });
    }
  
    async createCategory(createCategoryDto: CreateCategoryDto): Promise<Category> {
      const category = new Category();
      category.name = createCategoryDto.name;
      category.slug = createCategoryDto.slug;
      
      if (createCategoryDto.parentCategoryId) {
        const parentCategory = await this.categoryRepository.findOne({
          where: { id: createCategoryDto.parentCategoryId },
        });
        if (parentCategory) {
          category.parentCategory = parentCategory;
          category.parentCategoryId = parentCategory.id; 
        } else {
          throw new Error('Parent category not found');
        }
      }
      return this.categoryRepository.save(createCategoryDto);
    }
  
    async updateCategory(id: number, updateDto: UpdateCategoryDto): Promise<void> {
      const updateData: Partial<Category> = {
        name: updateDto.name,
        slug: updateDto.slug,
      };
    
      if (updateDto.parentCategoryId) {
        const parentCategory = await this.categoryRepository.findOne({
          where: { id: updateDto.parentCategoryId },
        });
        if (!parentCategory) {
          throw new Error('Parent category not found');
        }
        updateData.parentCategory = parentCategory;
      } else {
        updateData.parentCategory = null; 
      }
    
      await this.categoryRepository.update(id, updateData);
    }
  
    async removeCategory(id: number): Promise<void> {
      await this.categoryRepository.delete(id);
    }
  
    // #################### Attribute methods ####################
    async findAllAttributes(): Promise<Attribute[]> {
      return this.attributeRepository.find({relations: ['items'],});
    }
  
    async findOneAttribute(id: number): Promise<Attribute> {
      return this.attributeRepository.findOne({ 
        where: { id },
        relations: ['items'], 
      });
    }
  
    async createAttribute(createAttributeDto: CreateAttributeDto): Promise<Attribute> {
      const attribute = new Attribute();
      attribute.name = createAttributeDto.name;
      attribute.slug = createAttributeDto.slug;
      return this.attributeRepository.save(attribute);
    }
  
    async updateAttribute(id: number, updateData: UpdateAttributeDto): Promise<void> {
      if (!Object.keys(updateData).length) {
        throw new Error('No update values provided');
      }
      await this.attributeRepository.update(id, updateData);
    }
  
    async removeAttribute(id: number): Promise<void> {
      await this.attributeRepository.delete(id);
    }
  
    // #################### AttributeItem methods ####################
    async findAllAttributeItems(): Promise<AttributeItem[]> {
      return this.attributeItemRepository.find();
    }
  
    async findOneAttributeItem(id: number): Promise<AttributeItem> {
      return this.attributeItemRepository.findOne({ where: { id } });
    }
  
    async createAttributeItem(createAttributeItemDto: CreateAttributeItemDto): Promise<AttributeItem> {
      const attributeItem = new AttributeItem();
      attributeItem.name = createAttributeItemDto.name;
      attributeItem.slug = createAttributeItemDto.slug;
    
      // Fetch and assign the parent Attribute
      const attribute = await this.attributeRepository.findOne({
        where: { id: createAttributeItemDto.attributeId },
      });
      if (!attribute) {
        throw new Error('Attribute not found');
      }
      attributeItem.attribute = attribute;
    
      return this.attributeItemRepository.save(attributeItem);
    }
  
    async updateAttributeItem(id: number, updateDto: UpdateAttributeItemDto): Promise<void> {
      const attribute = await this.attributeRepository.findOne({
        where: { id: updateDto.attributeId },
      });
    
      if (!attribute) {
        throw new Error('Attribute not found');
      }
    
      await this.attributeItemRepository.update(id, {
        name: updateDto.name,
        slug: updateDto.slug,
        attribute: attribute,
      });
    }
  
    async removeAttributeItem(id: number): Promise<void> {
      await this.attributeItemRepository.delete(id);
    }
  
    

  // ####################  ITEM  ####################
  async findAllItems(): Promise<Item[]> {
    return this.itemRepository.find();
  }

  async findOneItem(id: number): Promise<Item> {
    return this.itemRepository.findOne({ where: { id } });
  }

  async createItem(createItemDto: CreateItemDto): Promise<Item> {
    const item = new Item();
    item.name = createItemDto.name;
    item.sku = createItemDto.sku;
    item.slug = createItemDto.slug;
    item.barcode = createItemDto.barcode;
    item.quantity = createItemDto.quantity;
    item.purchasePrice = createItemDto.purchasePrice;
    item.sellingPrice = createItemDto.sellingPrice;
    item.discountPrice = createItemDto.discountPrice || 0;
    item.discount = createItemDto.discount || 0;
    item.images = createItemDto.images;

    // Fetch and assign location
    const location = await this.locationRepository.findOne({
      where: { id: createItemDto.locationId },
    });
    if (!location) {
      throw new Error('Location not found');
    }
    item.location = location;

    // Fetch and assign brand
    const brand = await this.brandRepository.findOne({
      where: { id: createItemDto.brandId },
    });
    if (!brand) {
      throw new Error('Brand not found');
    }
    item.brand = brand;

    // Fetch and assign attributes
    if (createItemDto.attributeIds && createItemDto.attributeIds.length > 0) {
      const attributes = await this.attributeRepository.findByIds(
        createItemDto.attributeIds,
      );
      item.attributes = attributes;
    }

    // Fetch and assign category
    const category = await this.categoryRepository.findOne({
      where: { id: createItemDto.categoryId },
    });
    if (!category) {
      throw new Error('Category not found');
    }
    item.category = category;

    // Fetch and assign tags
    if (createItemDto.tagIds && createItemDto.tagIds.length > 0) {
      const tags = await this.tagRepository.findByIds(createItemDto.tagIds);
      item.tags = tags;
    }

    // Fetch and assign related items
    if (createItemDto.relatedItemIds && createItemDto.relatedItemIds.length > 0) {
      const relatedItems = await this.itemRepository.findByIds(
        createItemDto.relatedItemIds,
      );
      item.relatedItems = relatedItems;
    }

    return this.itemRepository.save(item);
  }


// Update
  async updateItem(id: number, dto: UpdateItemDto): Promise<void> {
    const item = await this.itemRepository.findOne({
      where: { id },
      relations: ['attributes', 'tags', 'relatedItems', 'brand', 'location', 'category'],
    });
  
    if (!item) {
      throw new Error('Item not found');
    }
  
    item.name = dto.name;
    item.sku = dto.sku;
    item.slug = dto.slug;
    item.barcode = dto.barcode;
    item.quantity = dto.quantity;
    item.purchasePrice = dto.purchasePrice;
    item.sellingPrice = dto.sellingPrice;
    item.discountPrice = dto.discountPrice || 0;
    item.discount = dto.discount || 0;
    item.images = dto.images;
  
    const location = await this.locationRepository.findOne({ where: { id: dto.locationId } });
    if (!location) throw new Error('Location not found');
    item.location = location;
  
    const brand = await this.brandRepository.findOne({ where: { id: dto.brandId } });
    if (!brand) throw new Error('Brand not found');
    item.brand = brand;
  
    const category = await this.categoryRepository.findOne({ where: { id: dto.categoryId } });
    if (!category) throw new Error('Category not found');
    item.category = category;
  
    if (dto.attributeIds && dto.attributeIds.length > 0) {
      const attributes = await this.attributeRepository.findByIds(dto.attributeIds);
      item.attributes = attributes;
    } else {
      item.attributes = [];
    }
  
    if (dto.tagIds && dto.tagIds.length > 0) {
      const tags = await this.tagRepository.findByIds(dto.tagIds);
      item.tags = tags;
    } else {
      item.tags = [];
    }
  
    if (dto.relatedItemIds && dto.relatedItemIds.length > 0) {
      const relatedItems = await this.itemRepository.findByIds(dto.relatedItemIds);
      item.relatedItems = relatedItems;
    } else {
      item.relatedItems = [];
    }
  
    await this.itemRepository.save(item);
  }

  async removeItem(id: number): Promise<void> {
    await this.itemRepository.delete(id);
  }

  // ####################  ItemVariation methods ####################
  async findAllItemVariations(): Promise<ItemVariation[]> {
    return this.itemVariationRepository.find();
  }

  async findOneItemVariation(id: number): Promise<ItemVariation> {
    return this.itemVariationRepository.findOne({ where: { id } });
  }

  async createItemVariation(itemVariation: ItemVariation): Promise<ItemVariation> {
    return this.itemVariationRepository.save(itemVariation);
  }

  async updateItemVariation(id: number, itemVariation: ItemVariation): Promise<void> {
    await this.itemVariationRepository.update(id, itemVariation);
  }

  async removeItemVariation(id: number): Promise<void> {
    await this.itemVariationRepository.delete(id);
  }


}
