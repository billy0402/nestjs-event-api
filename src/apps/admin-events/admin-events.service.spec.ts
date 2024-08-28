import { Test, TestingModule } from '@nestjs/testing';
import { AdminEventsService } from './admin-events.service';

describe('AdminEventsService', () => {
  let service: AdminEventsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdminEventsService],
    }).compile();

    service = module.get<AdminEventsService>(AdminEventsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
