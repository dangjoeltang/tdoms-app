import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PurchaseOrderRow as RowModel } from '@prisma/client';
import { OrderRowService } from './order-row.service';

@Controller('order-row')
export class OrderRowController {
  constructor(private readonly rowService: OrderRowService) {}

  @Get('/:poNumber')
  async getOrderRows(@Param('poNumber') poNumber: string): Promise<RowModel[]> {
    return this.rowService.fetchForOrder({ poNumber: poNumber });
  }

  @Post('/:poNumber')
  async createOrderRow(
    @Param('poNumber') poNumber: string,
    @Body() data: RowModel,
  ): Promise<RowModel> {
    const { productNumber, quantity, ...rowData } = data;
    return this.rowService.createOne(poNumber, productNumber, quantity);
  }

  @Put('/:poNumber/:modelNumber')
  async updateOrderRow(
    @Param('poNumber') po: string,
    @Param('modelNumber') model: string,
    @Body() data: { quantity: number },
  ): Promise<RowModel[]> {
    const poNumber_productNumber = { poNumber: po, productNumber: model };
    return data.quantity === 0
      ? await this.rowService.deleteOne(po, model)
      : await this.rowService.updateOne({
          where: { poNumber_productNumber },
          rowData: { productNumber: model, quantity: data.quantity },
        });
  }

  @Delete('/:poNumber/:modelNumber')
  async deleteOrderRow(
    @Param('poNumber') po: string,
    @Param('modelNumber') model: string,
  ): Promise<RowModel[]> {
    return this.rowService.deleteOne(po, model);
  }
}
