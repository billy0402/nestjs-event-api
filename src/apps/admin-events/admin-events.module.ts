import { Module } from '@nestjs/common';

import { PrismaService } from '@/services/prisma/prisma.service';

import { AdminEventsController } from './admin-events.controller';
import { AdminEventsService } from './admin-events.service';

@Module({
  controllers: [AdminEventsController],
  providers: [AdminEventsService, PrismaService],
})
export class AdminEventsModule {}
