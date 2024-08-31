import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { PrismaService } from '@/services/prisma/prisma.service';
import { UsersService } from '@/services/users/users.service';

import { PublicReservationsController } from './public-reservations.controller';
import { PublicReservationsService } from './public-reservations.service';

@Module({
  imports: [JwtModule],
  controllers: [PublicReservationsController],
  providers: [PublicReservationsService, PrismaService, UsersService],
})
export class PublicReservationsModule {}
