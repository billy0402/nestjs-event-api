import {
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
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';

import { Response } from 'express';
import { ZodSerializerDto } from 'nestjs-zod';

import { EventInDto, EventOutDto } from '@/dto/event.dto';

import { AdminEventsService } from './admin-events.service';

@ApiTags('admin-events')
@Controller('admin/events')
export class AdminEventsController {
  constructor(private readonly adminEventService: AdminEventsService) {}

  @ApiOkResponse({ type: EventOutDto, isArray: true })
  @ZodSerializerDto(EventOutDto)
  @Get()
  async findAll() {
    return await this.adminEventService.findAll();
  }

  @ApiOkResponse({ type: EventOutDto })
  @ZodSerializerDto(EventOutDto)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.adminEventService.findOne(id);
  }

  @ApiCreatedResponse({ type: EventOutDto })
  @ZodSerializerDto(EventOutDto)
  @Post()
  async create(@Body() event: EventInDto) {
    return await this.adminEventService.create(event);
  }

  @ApiOkResponse({ type: EventOutDto })
  @ZodSerializerDto(EventOutDto)
  @Put(':id')
  async update(@Param('id') id: string, @Body() event: EventInDto) {
    return await this.adminEventService.update(id, event);
  }

  @ApiNoContentResponse()
  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    await this.adminEventService.remove(id);
    return res.status(HttpStatus.NO_CONTENT).send();
  }
}
