import { faker } from '@faker-js/faker';
import { Client, Contact, Order, Product, ProductPricing } from './seed.types';

export const generateProducts = (count: number): Product[] => {
  const products: Product[] = [];
  for (let i = 0; i < count; i++) {
    const product: Product = {
      type: faker.random.arrayElement(['Chandelier', 'Sconce', 'Lamp']),
      modelNumber: faker.random.alphaNumeric(5).toLocaleUpperCase(),
      name: faker.commerce.productName(),
      note: faker.lorem.sentence(),
      stockQuantity: faker.random.number({ min: 0, max: 10 }),
      nextRestockDate: faker.date.future(),
      nextRestockQuantity: faker.random.number({ min: 5, max: 10 }),
      bulbCount: faker.random.arrayElement([3, 4, 5, 6, 8, 10]),
      finish: faker.commerce.productMaterial(),
      grossWeight: faker.random.number({ min: 5, max: 100 }),
      pkgLength: faker.random.number({ min: 5, max: 25 }),
      pkgWidth: faker.random.number({ min: 5, max: 25 }),
      pkgHeight: faker.random.number({ min: 5, max: 25 }),
      netWeight: faker.random.number({ min: 5, max: 100 }),
      unitLength: faker.random.number({ min: 5, max: 25 }),
      unitWidth: faker.random.number({ min: 5, max: 25 }),
      unitHeight: faker.random.number({ min: 5, max: 25 }),
    };
    products.push(product);
  }
  return products;
};

export const generatePricing = (): ProductPricing => {
  const retail = faker.random.number({ min: 50, max: 1000 });
  const wholesale = retail * 0.8;
  const cost = wholesale * 0.5;
  const price: ProductPricing = {
    retailPrice: retail,
    wholesalePrice: wholesale,
    cost: cost,
  };
  return price;
};

export const generateOrders = (count: number): Order[] => {
  const orders: Order[] = [];
  for (let i = 0; i < count; i++) {
    const order: Order = {
      poNumber: `${faker.random.alpha({
        count: 3,
        upcase: true,
      })}-${faker.random.alphaNumeric(5).toUpperCase()}`,
      salesRepName: faker.name.findName(),
      paymentTerms: 'Net 30',
      status: 'Open',
    };
    orders.push(order);
  }
  return orders;
};

export const generateContacts = (count = 3): Contact[] => {
  const contacts: Contact[] = [];
  for (let i = 0; i < count; i++) {
    const phone = faker.phone.phoneNumber('(###) ###-###');
    const prefix = phone.split('-')[0];

    const contact: Contact = {
      name: faker.name.findName(),
      phone: phone,
      email: faker.internet.email(),
      fax: Math.random() < 0.75 ? faker.phone.phoneNumber(`${prefix}-###`) : '',
    };
    contacts.push(contact);
  }

  return contacts;
};

export const generateClients = (count: number): Client[] => {
  const clients: Client[] = [];
  for (let i = 0; i < count; i++) {
    const name = faker.company.companyName();
    const accounts = ['Kanova', 'Terracotta'];
    const accountNumber = name.replace(/[aeiou\s]/gi, '').toUpperCase();
    const phone = faker.phone.phoneNumber('(###) ###-###');

    const client: Client = {
      name: name,
      accountOwner: faker.random.arrayElement(accounts),
      accountNumber: accountNumber,
      accountType: faker.random.arrayElement(['Showroom', 'Distributor']),
      businessType: faker.random.arrayElement(['Retail', 'Wholesale']),
      description: faker.company.catchPhraseAdjective(),
      taxId: faker.finance.routingNumber(),
      phone: faker.phone.phoneNumber('(###) ###-####'),
      email: faker.internet.email(),
      fax:
        Math.random() < 0.85
          ? faker.phone.phoneNumber(`${phone.split('-')[0]}-###`)
          : '',
      discount: Math.random() < 0.5 ? 10 : 0,
      paymentTerms: 'Net 30',
      // addresses: [],
      // contacts: [],
      // orders: [],
    };
    clients.push(client);
  }
  return clients;
};
