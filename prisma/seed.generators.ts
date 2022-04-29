import { faker } from '@faker-js/faker';
import { Client, Contact, Order } from './seed.types';

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
      fax:
        Math.random() < 0.75 ? faker.phone.phoneNumber(`${prefix}-###`) : null,
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
          : null,
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
