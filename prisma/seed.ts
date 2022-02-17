import { PrismaClient } from '@prisma/client';
import { products } from '../utils/seed/products.seed';

const prisma = new PrismaClient();

async function main() {
  const manyProducts = await prisma.product.createMany({
    data: products,
  });

  console.log('FINISHED SEEDING PRODUCTS');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
