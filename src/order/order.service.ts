import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PurchaseOrder, PurchaseOrderRow, Prisma } from '@prisma/client';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

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
    await this.prisma.$transaction(
      orderRows.map((product) => {
        return this.prisma.purchaseOrderRow.upsert({
          // Need a better way to get the orderRow id's so I can change the producId if needed.
          // Changing the productId is treated as a new row.
          // Need a way to delete orderRows, maybe add logic for when quantity is set to 0
          where: {
            poNumber_productNumber: {
              poNumber: where.poNumber,
              productNumber: product.productNumber,
            },
          },
          create: {
            productNumber: product.productNumber,
            quantity: product.quantity,
            poNumber: where.poNumber,
            // ...product,
          },
          update: { ...product },
        });
      }),
    );
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
