import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';

import { ZodSerializerInterceptor, ZodValidationPipe } from 'nestjs-zod';

import { ENVSchema } from '@/models/env';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AdminAuthModule } from './apps/admin-auth/admin-auth.module';
import { AdminEventsModule } from './apps/admin-events/admin-events.module';
import { AdminNewsModule } from './apps/admin-news/admin-news.module';
import { PublicAuthModule } from './apps/public-auth/public-auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: (config) => ENVSchema.parse(config),
    }),
    PublicAuthModule,
    AdminAuthModule,
    AdminEventsModule,
    AdminNewsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // 使用 @Body 的 Dto 對 Request 進行資料驗證
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
    // 使用 @ZodSerializerDto 的 Dto 對 Response 進行資料驗證
    {
      provide: APP_INTERCEPTOR,
      useClass: ZodSerializerInterceptor,
    },
  ],
})
export class AppModule {}
