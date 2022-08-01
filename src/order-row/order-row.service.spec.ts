import { Test, TestingModule } from '@nestjs/testing';
import { OrderRowService } from './order-row.service';

describe('OrderRowService', () => {
  let service: OrderRowService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderRowService],
    }).compile();

    service = module.get<OrderRowService>(OrderRowService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
