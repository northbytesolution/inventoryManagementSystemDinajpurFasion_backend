/* eslint-disable prettier/prettier */

import { Controller, Post, Body } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  create(@Body() createInvoiceDto: CreateInvoiceDto) {
    return this.orderService.create(createInvoiceDto);
  }
}
