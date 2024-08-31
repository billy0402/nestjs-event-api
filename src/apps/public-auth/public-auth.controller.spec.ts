import { Test, TestingModule } from '@nestjs/testing';
import { PublicAuthController } from './public-auth.controller';
import { PublicAuthService } from './public-auth.service';

describe('PublicAuthController', () => {
  let controller: PublicAuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PublicAuthController],
      providers: [PublicAuthService],
    }).compile();

    controller = module.get<PublicAuthController>(PublicAuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
