import { Test, TestingModule } from '@nestjs/testing';
import { AdminNewsController } from './admin-news.controller';
import { AdminNewsService } from './admin-news.service';

describe('AdminNewsController', () => {
  let controller: AdminNewsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminNewsController],
      providers: [AdminNewsService],
    }).compile();

    controller = module.get<AdminNewsController>(AdminNewsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
