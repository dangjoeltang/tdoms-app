import { Module } from '@nestjs/common';
import { OrderRowService } from './order-row.service';
import { OrderRowController } from './order-row.controller';

@Module({
  exports: [OrderRowService],
  controllers: [OrderRowController],
  providers: [OrderRowService],
})
export class OrderRowModule {}
