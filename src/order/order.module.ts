import { Module } from '@nestjs/common';
import { OrderRowModule } from 'src/order-row/order-row.module';

import { OrderController } from './order.controller';
import { OrderService } from './order.service';

@Module({
  imports: [OrderRowModule],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
