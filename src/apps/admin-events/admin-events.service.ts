import { BadRequestException, Injectable } from '@nestjs/common';

import { EventInDto } from '@/dto/event.dto';
import { PrismaService } from '@/services/prisma/prisma.service';

@Injectable()
export class AdminEventsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.event.findMany();
  }

  async findOne(id: string) {
    // 檢查是否有此活動
    const event = await this.prisma.event.findUnique({ where: { id } });
    if (!event) {
      throw new BadRequestException('沒有找到對應活動');
    }

    return event;
  }

  async create(data: EventInDto) {
    return await this.prisma.event.create({ data });
  }

  async update(id: string, data: EventInDto) {
    // 檢查是否有此活動
    await this.findOne(id);

    return await this.prisma.event.update({ data, where: { id } });
  }

  async remove(id: string) {
    // 檢查是否有此活動
    await this.findOne(id);

    // 檢查此活動是否有預約
    const reservations = await this.prisma.reservation.findMany({
      where: { eventId: id },
    });
    if (reservations.length > 0) {
      throw new BadRequestException('此活動已有預約，無法刪除');
    }

    return await this.prisma.event.delete({ where: { id } });
  }
}
