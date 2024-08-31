import { BadRequestException, Injectable } from '@nestjs/common';

import { NewsInDto } from '@/dto/news.dto';
import { PrismaService } from '@/services/prisma/prisma.service';

@Injectable()
export class AdminNewsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.news.findMany();
  }

  async findOne(id: string) {
    // 檢查是否有此最新消息
    const news = await this.prisma.news.findUnique({ where: { id } });
    if (!news) {
      throw new BadRequestException('沒有找到對應最新消息');
    }

    return news;
  }

  async create(data: NewsInDto) {
    return await this.prisma.news.create({ data });
  }

  async update(id: string, data: NewsInDto) {
    // 檢查是否有此最新消息
    await this.findOne(id);

    return await this.prisma.news.update({ data, where: { id } });
  }

  async remove(id: string) {
    // 檢查是否有此最新消息
    await this.findOne(id);

    return await this.prisma.news.delete({ where: { id } });
  }
}
