import { Module } from '@nestjs/common';

import { PrismaService } from '@/services/prisma/prisma.service';

import { PublicNewsController } from './public-news.controller';
import { PublicNewsService } from './public-news.service';

@Module({
  controllers: [PublicNewsController],
  providers: [PublicNewsService, PrismaService],
})
export class PublicNewsModule {}
