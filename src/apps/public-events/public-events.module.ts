import { Module } from '@nestjs/common';

import { PrismaService } from '@/services/prisma/prisma.service';

import { PublicEventsController } from './public-events.controller';
import { PublicEventsService } from './public-events.service';

@Module({
  controllers: [PublicEventsController],
  providers: [PublicEventsService, PrismaService],
})
export class PublicEventsModule {}
