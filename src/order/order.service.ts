import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { PurchaseOrder, PurchaseOrderRow, Prisma } from '@prisma/client';
import { OrderRowService } from 'src/order-row/order-row.service';

@Injectable()
export class OrderService {
  constructor(
    private prisma: PrismaService,
    private readonly rowService: OrderRowService,
  ) {}

  async fetchOne(
    orderWhereUniqueInput: Prisma.PurchaseOrderWhereUniqueInput,
  ): Promise<PurchaseOrder | null> {
    return this.prisma.purchaseOrder.findUnique({
      where: orderWhereUniqueInput,
      include: {
        client: {
          select: {
            name: true,
            accountNumber: true,
          },
        },
        products: true,
      },
    });
  }

  async fetchMany(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.PurchaseOrderWhereUniqueInput;
    where?: Prisma.PurchaseOrderWhereInput;
    orderBy?: Prisma.PurchaseOrderOrderByWithRelationInput;
    include?: Prisma.PurchaseOrderInclude;
  }): Promise<PurchaseOrder[]> {
    const { skip, take, cursor, where, orderBy, include } = params;
    return this.prisma.purchaseOrder.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include,
    });
  }

  async createOrder(
    data: Prisma.PurchaseOrderCreateInput,
  ): Promise<PurchaseOrder> {
    return this.prisma.purchaseOrder.create({
      data,
    });
  }

  async updateOrder(params: {
    where: Prisma.PurchaseOrderWhereUniqueInput;
    order: Prisma.PurchaseOrderUpdateInput;
    orderRows: PurchaseOrderRow[];
  }): Promise<PurchaseOrder> {
    const { where, order, orderRows } = params;
    await this.rowService.updateOrCreateMany(where.poNumber, {
      data: orderRows,
    });
    return this.prisma.purchaseOrder.update({
      data: order,
      where,
      include: {
        products: {
          select: {
            productNumber: true,
            quantity: true,
            createdAt: true,
            updatedAt: true,
          },
        },
      },
    });
  }

  async deleteOrder(
    where: Prisma.PurchaseOrderWhereUniqueInput,
  ): Promise<PurchaseOrder> {
    return this.prisma.purchaseOrder.delete({
      where,
    });
  }
}
