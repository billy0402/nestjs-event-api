import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdminEventsService } from './admin-events.service';
import { CreateAdminEventDto } from './dto/create-admin-event.dto';
import { UpdateAdminEventDto } from './dto/update-admin-event.dto';

@Controller('admin/events')
export class AdminEventsController {
  constructor(private readonly adminEventsService: AdminEventsService) {}

  @Post()
  create(@Body() createAdminEventDto: CreateAdminEventDto) {
    return this.adminEventsService.create(createAdminEventDto);
  }

  @Get()
  findAll() {
    return this.adminEventsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminEventsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdminEventDto: UpdateAdminEventDto) {
    return this.adminEventsService.update(+id, updateAdminEventDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminEventsService.remove(+id);
  }
}
