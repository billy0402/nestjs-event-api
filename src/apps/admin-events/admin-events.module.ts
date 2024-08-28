import { Module } from '@nestjs/common';
import { AdminEventsService } from './admin-events.service';
import { AdminEventsController } from './admin-events.controller';

@Module({
  controllers: [AdminEventsController],
  providers: [AdminEventsService],
})
export class AdminEventsModule {}
