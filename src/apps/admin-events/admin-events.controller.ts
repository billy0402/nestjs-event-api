import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';

import { Response } from 'express';

import { EventInDto, EventInSchema, EventOutSchema } from '@/dto/event.dto';

import { AdminEventsService } from './admin-events.service';

@Controller('admin/events')
export class AdminEventsController {
  constructor(private readonly adminEventsService: AdminEventsService) {}

  @Get()
  async findAll() {
    const events = await this.adminEventsService.findAll();
    return EventOutSchema.array().parse(events);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const event = await this.adminEventsService.findOne(id);
    return EventOutSchema.parse(event);
  }

  @Post()
  async create(@Body() event: EventInDto) {
    const parsed = EventInSchema.safeParse(event);
    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors);
    }

    const createdEvent = await this.adminEventsService.create(parsed.data);
    return EventOutSchema.parse(createdEvent);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() event: EventInDto) {
    const parsed = EventInSchema.safeParse(event);
    if (!parsed.success) {
      throw new BadRequestException(parsed.error.errors);
    }

    const updatedEvent = await this.adminEventsService.update(id, parsed.data);
    return EventOutSchema.parse(updatedEvent);
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    await this.adminEventsService.remove(id);
    return res.status(HttpStatus.NO_CONTENT).send();
  }
}
