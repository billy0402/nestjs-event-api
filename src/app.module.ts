import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';

import { ZodSerializerInterceptor, ZodValidationPipe } from 'nestjs-zod';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminEventsModule } from './apps/admin-events/admin-events.module';

@Module({
  imports: [AdminEventsModule],
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
