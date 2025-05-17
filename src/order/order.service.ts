/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Invoice } from './entities/invoice.entity';
import { InvoiceItem } from './entities/invoice-item.entity';
import { Customer } from './entities/customer.entity';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { Item } from '../inventory/entities/item.entity/item.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Invoice)
    private invoiceRepository: Repository<Invoice>,
    @InjectRepository(InvoiceItem)
    private invoiceItemRepository: Repository<InvoiceItem>,
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
    // @InjectRepository(Item)
    // private itemRepository: Repository<Item>,
  ) {}

  async create(createInvoiceDto: CreateInvoiceDto) {
    const customer = await this.customerRepository.findOne({
      where: { id: Number(createInvoiceDto.customer_id) },
    });

    const invoice = this.invoiceRepository.create({
      ...createInvoiceDto,
      customer,
    });
    const savedInvoice = await this.invoiceRepository.save(invoice);

    const items = createInvoiceDto.items.map((itemDto) => {
      return this.invoiceItemRepository.create({
        ...itemDto,
        invoice: savedInvoice,
        item: { id: Number(itemDto.item_id) } as Item,
      });
    });

    await this.invoiceItemRepository.save(items);
    return { invoice: savedInvoice, items };
  }
}
