import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';

import { Response } from 'express';
import { ZodSerializerDto } from 'nestjs-zod';

import { ReservationInDto, ReservationOutDto } from '@/dto/reservation.dto';
import { AuthGuard } from '@/guards/auth/auth.guard';

import { PublicReservationsService } from './public-reservations.service';

@ApiTags('public-reservations')
@UseGuards(AuthGuard)
@Controller('public/reservations')
export class PublicReservationsController {
  constructor(
    private readonly publicReservationService: PublicReservationsService,
  ) {}

  @ApiOkResponse({ type: ReservationOutDto, isArray: true })
  @ZodSerializerDto(ReservationOutDto)
  @Get()
  async findAll(@Req() req) {
    return await this.publicReservationService.findAll(req.user);
  }

  @ApiOkResponse({ type: ReservationOutDto })
  @ZodSerializerDto(ReservationOutDto)
  @Get(':id')
  async findOne(@Req() req, @Param('id') id: string) {
    return await this.publicReservationService.findOne(id, req.user);
  }

  @ApiCreatedResponse({ type: ReservationOutDto })
  @ZodSerializerDto(ReservationOutDto)
  @Post()
  async create(@Req() req, @Body() reservation: ReservationInDto) {
    return await this.publicReservationService.create(reservation, req.user);
  }

  @ApiNoContentResponse()
  @Delete(':id')
  async remove(@Req() req, @Param('id') id: string, @Res() res: Response) {
    await this.publicReservationService.remove(id, req.user);
    return res.status(HttpStatus.NO_CONTENT).send();
  }
}
