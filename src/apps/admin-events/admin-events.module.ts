import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { PrismaService } from '@/services/prisma/prisma.service';
import { UsersService } from '@/services/users/users.service';

import { AdminEventsController } from './admin-events.controller';
import { AdminEventsService } from './admin-events.service';

@Module({
  imports: [JwtModule],
  controllers: [AdminEventsController],
  providers: [AdminEventsService, PrismaService, UsersService],
})
export class AdminEventsModule {}
