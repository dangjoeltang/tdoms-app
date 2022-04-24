import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PurchaseOrder, Prisma } from '@prisma/client';

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
    data: Prisma.PurchaseOrderUpdateInput;
  }): Promise<PurchaseOrder> {
    const { where, data } = params;
    return this.prisma.purchaseOrder.update({
      data,
      where,
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
