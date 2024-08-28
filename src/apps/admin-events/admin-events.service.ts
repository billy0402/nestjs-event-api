import { Injectable } from '@nestjs/common';

import { EventInDto } from '@/dto/event.dto';
import { PrismaService } from '@/services/prisma/prisma.service';

@Injectable()
export class AdminEventsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.event.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.event.findUnique({ where: { id } });
  }

  async create(data: EventInDto) {
    return await this.prisma.event.create({ data });
  }

  async update(id: string, data: EventInDto) {
    return await this.prisma.event.update({ data, where: { id } });
  }

  async remove(id: string) {
    return await this.prisma.event.delete({ where: { id } });
  }
}
