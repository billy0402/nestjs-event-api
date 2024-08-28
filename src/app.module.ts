import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminEventsModule } from './apps/admin-events/admin-events.module';

@Module({
  imports: [AdminEventsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
