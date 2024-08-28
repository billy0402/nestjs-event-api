import { Test, TestingModule } from '@nestjs/testing';
import { AdminEventsController } from './admin-events.controller';
import { AdminEventsService } from './admin-events.service';

describe('AdminEventsController', () => {
  let controller: AdminEventsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminEventsController],
      providers: [AdminEventsService],
    }).compile();

    controller = module.get<AdminEventsController>(AdminEventsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
