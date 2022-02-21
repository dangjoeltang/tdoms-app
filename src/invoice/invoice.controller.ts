import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  Query,
} from '@nestjs/common';
import { Invoice as InvoiceModel } from '@prisma/client';
import { InvoiceService } from './invoice.service';

@Controller('invoices')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Get('/:id')
  async getInvoice(@Param('id') id: string): Promise<InvoiceModel> {
    return this.invoiceService.fetchOne({
      id: Number(id),
    });
  }

  @Get('/')
  async getAllInvoices(): Promise<InvoiceModel[]> {
    const params = {};
    return this.invoiceService.fetchMany(params);
  }

  @Post('/')
  async createInvoice(
    @Query('orderNumber') orderNumber: string,
    @Body() data: InvoiceModel,
  ): Promise<InvoiceModel> {
    const newInvoice = {
      purchaseOrder: {
        connect: {
          poNumber: orderNumber,
        },
      },
      ...data,
    };

    return this.invoiceService.createInvoice(newInvoice);
  }

  @Put('/:id')
  async updateInvoice(
    @Param('id') id: string,
    @Body() data: InvoiceModel,
  ): Promise<InvoiceModel> {
    return this.invoiceService.updateInvoice({
      where: { id: Number(id) },
      data,
    });
  }

  @Delete('/:id')
  async deleteInvoice(@Param('id') id: string): Promise<InvoiceModel> {
    return this.invoiceService.deleteInvoice({ id: Number(id) });
  }
}
