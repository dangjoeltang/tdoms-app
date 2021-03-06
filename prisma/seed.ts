import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';
import {
  generateClients,
  generateContacts,
  generateOrderRows,
  generateOrders,
  generatePricing,
  generateProducts,
} from './seed.generators';

const prisma = new PrismaClient();

async function main() {
  const products = generateProducts(25);
  const productCollection = await prisma.$transaction(
    products.map((product) => {
      return prisma.product.upsert({
        where: { modelNumber: product.modelNumber },
        update: {},
        create: {
          ...product,
          pricing: {
            create: generatePricing(),
          },
        },
      });
    }),
  );

  // const contacts = generateContacts(20);
  // const contactCollection = await prisma.$transaction(
  //   contacts.map((contact) =>
  //     prisma.contact.upsert({
  //       where: { email: contact.email },
  //       update: {},
  //       create: contact,
  //     }),
  //   ),
  // );

  const clients = generateClients(5);
  await prisma.$transaction(
    clients.map((client) => {
      return prisma.client.upsert({
        where: { name: client.name },
        update: {},
        create: {
          ...client,
          addresses: {},
          contacts: {
            create: generateContacts(Math.floor(Math.random() * 5)),
          },
        },
      });
    }),
  );

  const clientKanova = await prisma.client.upsert({
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
        create: generateContacts(2),
      },
    },
  });

  const clientCollection = await prisma.client.findMany({
    select: {
      id: true,
      name: true,
      accountNumber: true,
    },
  });

  // loop through clients and create a transaction for orders for each one
  clientCollection.map(async (client) => {
    const ordersData = generateOrders(
      faker.datatype.number({ min: 1, max: 3 }),
    );
    await prisma.$transaction(
      ordersData.map((order) => {
        const productNumberSet = new Set(
          productCollection.map((product) => product.modelNumber),
        );
        const orderRowsData = generateOrderRows(3, productNumberSet);

        return prisma.purchaseOrder.create({
          data: {
            ...order,
            client: {
              connect: {
                id: client.id,
              },
            },
            products: {
              create: orderRowsData,
            },
          },
        });
      }),
    );
  });

  // const orderCollection = await prisma.purchaseOrder.findMany({
  //   select: {
  //     poNumber: true,
  //     id: true,
  //   },
  // });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
