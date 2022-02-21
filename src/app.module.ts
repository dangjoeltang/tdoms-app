import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { PrismaModule } from './prisma/prisma.module';
import { ClientModule } from './client/client.module';
import { ContactModule } from './contact/contact.module';
import { OrderModule } from './order/order.module';
import { InvoiceModule } from './invoice/invoice.module';

@Module({
  imports: [
    ProductModule,
    PrismaModule,
    ClientModule,
    ContactModule,
    OrderModule,
    InvoiceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
