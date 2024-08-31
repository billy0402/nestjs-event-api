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
  UseGuards,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';

import { Role } from '@prisma/client';
import { Response } from 'express';
import { ZodSerializerDto } from 'nestjs-zod';

import { NewsInDto, NewsOutDto } from '@/dto/news.dto';
import { AuthGuard } from '@/guards/auth/auth.guard';
import { Roles, RolesGuard } from '@/guards/roles/roles.guard';

import { AdminNewsService } from './admin-news.service';

@ApiTags('admin-news')
@Roles([Role.ADMIN])
@UseGuards(AuthGuard, RolesGuard)
@Controller('admin/news')
export class AdminNewsController {
  constructor(private readonly adminNewsService: AdminNewsService) {}

  @ApiOkResponse({ type: NewsOutDto, isArray: true })
  @ZodSerializerDto(NewsOutDto)
  @Get()
  async findAll() {
    return await this.adminNewsService.findAll();
  }

  @ApiOkResponse({ type: NewsOutDto })
  @ZodSerializerDto(NewsOutDto)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.adminNewsService.findOne(id);
  }

  @ApiCreatedResponse({ type: NewsOutDto })
  @ZodSerializerDto(NewsOutDto)
  @Post()
  async create(@Body() news: NewsInDto) {
    return await this.adminNewsService.create(news);
  }

  @ApiOkResponse({ type: NewsOutDto })
  @ZodSerializerDto(NewsOutDto)
  @Put(':id')
  async update(@Param('id') id: string, @Body() news: NewsInDto) {
    return await this.adminNewsService.update(id, news);
  }

  @ApiNoContentResponse()
  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    await this.adminNewsService.remove(id);
    return res.status(HttpStatus.NO_CONTENT).send();
  }
}
