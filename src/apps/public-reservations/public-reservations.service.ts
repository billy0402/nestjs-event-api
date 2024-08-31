import { BadRequestException, Injectable } from '@nestjs/common';

import { User } from '@prisma/client';

import { ReservationInDto } from '@/dto/reservation.dto';
import { PrismaService } from '@/services/prisma/prisma.service';

@Injectable()
export class PublicReservationsService {
  constructor(private prisma: PrismaService) {}

  async findAll(user: User) {
    // 取得使用者的所有預約
    return await this.prisma.reservation.findMany({
      include: { event: true, user: true },
      where: { user },
    });
  }

  async findOne(id: string, user: User) {
    // 檢查是否有此預約
    const reservation = await this.prisma.reservation.findMany({
      include: { event: true, user: true },
      where: { id, user },
    });
    if (!reservation) {
      throw new BadRequestException('沒有找到對應預約');
    }

    return reservation;
  }

  async create(data: ReservationInDto, user: User) {
    const { eventId } = data;

    // 檢查活動是否存在且尚未結束
    const event = await this.prisma.event.findUnique({
      where: {
        id: eventId,
        endDateTime: { lte: new Date() },
        isActive: true,
      },
    });
    if (!event) {
      throw new BadRequestException('活動不存在或尚未開始');
    }

    // 檢查是否已預約過此活動
    const reservation = await this.prisma.reservation.findFirst({
      where: { eventId, user },
    });
    if (reservation) {
      throw new BadRequestException('已預約過此活動');
    }

    return await this.prisma.reservation.create({
      data: { eventId, userId: user.id },
      include: { event: true, user: true },
    });
  }

  async remove(id: string, user: User) {
    // 檢查是否有此預約
    await this.findOne(id, user);

    return await this.prisma.reservation.delete({ where: { id } });
  }
}
