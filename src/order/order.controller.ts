import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { PurchaseOrder as OrderModel } from '@prisma/client';
import { OrderService } from './order.service';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get('/:id')
  async getOrder(@Param('id') id: string): Promise<OrderModel> {
    return this.orderService.fetchOne({ id: Number(id) });
  }

  @Get('/')
  async getAllOrders(): Promise<OrderModel[]> {
    const params = {};
    return this.orderService.fetchMany(params);
  }

  @Post('/')
  async createOrder(
    @Query('client', ParseIntPipe) client: number,
    @Body() data: OrderModel,
  ): Promise<OrderModel> {
    const newOrder = {
      client: {
        connect: {
          id: Number(client),
        },
      },
      ...data,
    };

    return this.orderService.createOrder(newOrder);
  }

  @Put('/:id')
  async updateOrder(
    @Param('id') id: string,
    @Body() data: OrderModel,
  ): Promise<OrderModel> {
    return this.orderService.updateOrder({
      where: { id: Number(id) },
      data,
    });
  }

  @Delete('/:id')
  async deleteOrder(@Param('id') id: string): Promise<OrderModel> {
    return this.orderService.deleteOrder({ id: Number(id) });
  }
}
