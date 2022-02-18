import { PrismaClient } from '@prisma/client';
import { products } from '../utils/seed/products.seed';

const prisma = new PrismaClient();

async function main() {
  // const manyProducts = await prisma.product.createMany({
  //   data: products,
  // });

  const client = await prisma.client.upsert({
    where: { accountNumber: 'KNVA' },
    update: {},
    create: {
      name: 'Kanova',
      accountOwner: 'Avonak',
      accountNumber: 'KNVA',
      accountType: 'Showroom',
      businessType: 'Retail',
      description: '',
      taxId: '1234567890',
      phone: '512-555-1212',
      email: 'joel@kanova.com',
      fax: '',
      discount: 0,
      paymentTerms: 'Net 30',

      addresses: {
        create: [
          {
            title: 'Main Office',
            address: '123 Main St',
            city: 'Austin',
            state: 'TX',
            zipcode: '78704',
            note: 'This is the main office address',
            isShipping: true,
            isBilling: true,
          },
          {
            title: 'Secondary Office',
            address: '123 Other Rd',
            city: 'Austin',
            state: 'TX',
            zipcode: '78750',
            note: 'This is the secondary office address',
            isShipping: true,
            isBilling: false,
          },
        ],
      },
      contacts: {
        create: [
          {
            name: 'Joel',
            phone: '512-555-1212',
          },
        ],
      },
      orders: {
        create: [
          {
            poNumber: 'PO-123',
            salesRepName: 'Harrah',
            paymentTerms: 'Net 30',
            status: 'Open',
            // products: {
            //   connect: [
            //     { id: 1 },
            //     // { id: manyProducts[4].id },
            //     // { id: manyProducts[8].id },
            //   ],
            // },
          },
        ],
      },
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
