import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { ZodSerializerDto } from 'nestjs-zod';

import { NewsOutDto } from '@/dto/news.dto';

import { PublicNewsService } from './public-news.service';

@ApiTags('public-news')
@Controller('public/news')
export class PublicNewsController {
  constructor(private readonly publicNewsService: PublicNewsService) {}

  @ApiOkResponse({ type: NewsOutDto, isArray: true })
  @ZodSerializerDto(NewsOutDto)
  @Get()
  async findAll() {
    return await this.publicNewsService.findAll();
  }

  @ApiOkResponse({ type: NewsOutDto })
  @ZodSerializerDto(NewsOutDto)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.publicNewsService.findOne(id);
  }
}
