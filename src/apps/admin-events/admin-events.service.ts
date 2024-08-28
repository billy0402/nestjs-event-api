import { Injectable } from '@nestjs/common';
import { CreateAdminEventDto } from './dto/create-admin-event.dto';
import { UpdateAdminEventDto } from './dto/update-admin-event.dto';

@Injectable()
export class AdminEventsService {
  create(createAdminEventDto: CreateAdminEventDto) {
    return 'This action adds a new adminEvent';
  }

  findAll() {
    return `This action returns all adminEvents`;
  }

  findOne(id: number) {
    return `This action returns a #${id} adminEvent`;
  }

  update(id: number, updateAdminEventDto: UpdateAdminEventDto) {
    return `This action updates a #${id} adminEvent`;
  }

  remove(id: number) {
    return `This action removes a #${id} adminEvent`;
  }
}
