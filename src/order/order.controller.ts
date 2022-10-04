import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { Prisma, PurchaseOrder as OrderModel } from '@prisma/client';
import { OrderService } from './order.service';

const orderWithRows = Prisma.validator<Prisma.PurchaseOrderArgs>()({
  include: { products: true },
});
type OrderWithRows = Prisma.PurchaseOrderGetPayload<typeof orderWithRows>;

type OrderWithClientName = OrderModel & { clientName: string };

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get('/:poNumber')
  async getOrder(@Param('poNumber') poNumber: string): Promise<OrderModel> {
    return this.orderService.fetchOne({ poNumber: poNumber });
  }

  @Get('/')
  async getAllOrders(): Promise<OrderModel[]> {
    const params = {
      include: {
        client: {
          select: {
            name: true,
            accountNumber: true,
          },
        },
      },
    };
    return this.orderService.fetchMany(params);
  }

  @Post('/')
  async createOrder(@Body() data: OrderWithClientName): Promise<OrderModel> {
    const { clientName, ...orderData } = data;
    const newOrder = {
      client: {
        connect: {
          name: clientName,
        },
      },
      ...orderData,
    };

    return this.orderService.createOrder(newOrder);
  }

  // Need to put in logic for when trying to change the PO Number, it needs to reference using the id instead of the current PO Number
  @Put('/:poNumber')
  async updateOrder(
    @Param('poNumber') poNumber: string,
    @Body() data: OrderWithRows,
  ): Promise<OrderModel> {
    const { products, ...orderData } = data;
    return this.orderService.updateOrder({
      where: { poNumber: poNumber },
      order: orderData,
      orderRows: products,
    });
  }

  @Delete('/:poNumber')
  async deleteOrder(@Param('poNumber') poNumber: string): Promise<OrderModel> {
    return this.orderService.deleteOrder({ poNumber: poNumber });
  }
}
