import { Injectable } from '@nestjs/common';
import { Prisma, PurchaseOrderRow } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
import { OrderRowRequired, OrderRowUpdateMany } from './order-row.model';

@Injectable()
export class OrderRowService {
  constructor(private prisma: PrismaService) {}

  async fetchForOrder(
    where: Prisma.PurchaseOrderWhereUniqueInput,
  ): Promise<PurchaseOrderRow[] | null> {
    return this.prisma.purchaseOrderRow.findMany({
      where,
    });
  }

  async createOne(
    poNumber: string,
    productNumber: string,
    quantity?: number | null,
  ): Promise<PurchaseOrderRow> {
    const newRow = {
      order: {
        connect: {
          poNumber,
        },
      },
      product: {
        connect: {
          modelNumber: productNumber,
        },
      },
      quantity,
    };
    return this.prisma.purchaseOrderRow.create({ data: newRow });
  }

  async updateOne(params: {
    where: Prisma.PurchaseOrderRowWhereUniqueInput;
    rowData: OrderRowRequired;
  }): Promise<PurchaseOrderRow[]> {
    const { where, rowData } = params;
    await this.prisma.purchaseOrderRow.update({
      data: rowData,
      where,
    });
    return this.fetchForOrder(where);
  }

  async updateOrCreateMany(
    poNumber: string,
    rowsData: OrderRowUpdateMany,
  ): Promise<PurchaseOrderRow[]> {
    return rowsData.data
      ? await this.prisma.$transaction(
          rowsData.data.map((row) => {
            const poNumber_productNumber = {
              poNumber,
              productNumber: row.productNumber,
            };
            return row.quantity === 0
              ? this.prisma.purchaseOrderRow.delete({
                  where: { poNumber_productNumber },
                })
              : this.prisma.purchaseOrderRow.upsert({
                  where: { poNumber_productNumber },
                  create: {
                    order: {
                      connect: {
                        poNumber,
                      },
                    },
                    product: {
                      connect: {
                        modelNumber: row.productNumber,
                      },
                    },
                  },
                  update: {
                    quantity: row.quantity,
                  },
                });
          }),
        )
      : null;
  }

  async deleteOne(
    poNumber: string,
    productNumber: string,
  ): Promise<PurchaseOrderRow[]> {
    const poNumber_productNumber = { poNumber, productNumber };
    await this.prisma.purchaseOrderRow.delete({
      where: { poNumber_productNumber },
    });
    return this.fetchForOrder({ poNumber });
  }
}
