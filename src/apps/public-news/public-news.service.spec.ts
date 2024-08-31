import { Test, TestingModule } from '@nestjs/testing';
import { PublicNewsService } from './public-news.service';

describe('PublicNewsService', () => {
  let service: PublicNewsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PublicNewsService],
    }).compile();

    service = module.get<PublicNewsService>(PublicNewsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
