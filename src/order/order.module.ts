/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { Customer } from './entities/customer.entity';
import { Invoice } from './entities/invoice.entity';
import { InvoiceItem } from './entities/invoice-item.entity';
// import { Item } from '../item.entity/item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Customer, Invoice, InvoiceItem, ])],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
