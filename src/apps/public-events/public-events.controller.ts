import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { ZodSerializerDto } from 'nestjs-zod';

import { EventOutDto } from '@/dto/event.dto';

import { PublicEventsService } from './public-events.service';

@ApiTags('public-events')
@Controller('public/events')
export class PublicEventsController {
  constructor(private readonly publicEventService: PublicEventsService) {}

  @ApiOkResponse({ type: EventOutDto, isArray: true })
  @ZodSerializerDto(EventOutDto)
  @Get()
  async findAll() {
    return await this.publicEventService.findAll();
  }

  @ApiOkResponse({ type: EventOutDto })
  @ZodSerializerDto(EventOutDto)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.publicEventService.findOne(id);
  }
}
