import { Test, TestingModule } from '@nestjs/testing';
import { PublicAuthService } from './public-auth.service';

describe('PublicAuthService', () => {
  let service: PublicAuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PublicAuthService],
    }).compile();

    service = module.get<PublicAuthService>(PublicAuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
