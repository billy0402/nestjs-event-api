import { Test, TestingModule } from '@nestjs/testing';
import { PublicReservationsService } from './public-reservations.service';

describe('PublicReservationsService', () => {
  let service: PublicReservationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PublicReservationsService],
    }).compile();

    service = module.get<PublicReservationsService>(PublicReservationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
