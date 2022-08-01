import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { ClientModule } from './client/client.module';
import { ContactModule } from './contact/contact.module';
import { OrderModule } from './order/order.module';
import { InvoiceModule } from './invoice/invoice.module';
import { OrderRowModule } from './order-row/order-row.module';
import { PrismaModule, loggingMiddleware } from 'nestjs-prisma';

@Module({
  imports: [
    PrismaModule.forRoot({
      isGlobal: true,
      prismaServiceOptions: {
        middlewares: [loggingMiddleware()],
      },
    }),
    ProductModule,
    ClientModule,
    ContactModule,
    InvoiceModule,
    OrderModule,
    OrderRowModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
