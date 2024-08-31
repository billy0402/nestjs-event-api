import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { PrismaService } from '@/services/prisma/prisma.service';
import { UsersService } from '@/services/users/users.service';

import { PublicAuthController } from './public-auth.controller';
import { PublicAuthService } from './public-auth.service';

@Module({
  imports: [JwtModule],
  controllers: [PublicAuthController],
  providers: [PublicAuthService, PrismaService, UsersService],
})
export class PublicAuthModule {}
