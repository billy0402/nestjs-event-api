import { Test, TestingModule } from '@nestjs/testing';
import { PublicReservationsController } from './public-reservations.controller';
import { PublicReservationsService } from './public-reservations.service';

describe('PublicReservationsController', () => {
  let controller: PublicReservationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PublicReservationsController],
      providers: [PublicReservationsService],
    }).compile();

    controller = module.get<PublicReservationsController>(PublicReservationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
