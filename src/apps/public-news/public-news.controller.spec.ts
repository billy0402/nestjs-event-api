import { Test, TestingModule } from '@nestjs/testing';
import { PublicNewsController } from './public-news.controller';
import { PublicNewsService } from './public-news.service';

describe('PublicNewsController', () => {
  let controller: PublicNewsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PublicNewsController],
      providers: [PublicNewsService],
    }).compile();

    controller = module.get<PublicNewsController>(PublicNewsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
