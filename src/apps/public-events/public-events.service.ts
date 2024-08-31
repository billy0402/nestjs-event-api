import { BadRequestException, Injectable } from '@nestjs/common';

import { PrismaService } from '@/services/prisma/prisma.service';

@Injectable()
export class PublicEventsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    // 取得有啟用的活動
    return await this.prisma.event.findMany({ where: { isActive: true } });
  }

  async findOne(id: string) {
    // 檢查是否有此活動並且有啟用
    const event = await this.prisma.event.findUnique({
      where: { id, isActive: true },
    });
    if (!event) {
      throw new BadRequestException('沒有找到對應活動');
    }

    return event;
  }
}
