import { Test, TestingModule } from '@nestjs/testing';
import { OrderRowController } from './order-row.controller';

describe('OrderRowController', () => {
  let controller: OrderRowController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderRowController],
    }).compile();

    controller = module.get<OrderRowController>(OrderRowController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
