import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { PrismaService } from '@/services/prisma/prisma.service';
import { UsersService } from '@/services/users/users.service';

import { AdminNewsController } from './admin-news.controller';
import { AdminNewsService } from './admin-news.service';

@Module({
  imports: [JwtModule],
  controllers: [AdminNewsController],
  providers: [AdminNewsService, PrismaService, UsersService],
})
export class AdminNewsModule {}
