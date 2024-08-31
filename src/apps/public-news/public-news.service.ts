import { BadRequestException, Injectable } from '@nestjs/common';

import { PrismaService } from '@/services/prisma/prisma.service';

@Injectable()
export class PublicNewsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    // 取得所有已發布且啟用的最新消息
    return await this.prisma.news.findMany({
      where: { publishedAt: { lte: new Date() }, isActive: true },
    });
  }

  async findOne(id: string) {
    // 檢查是否有此最新消息
    const news = await this.prisma.news.findUnique({
      where: { id, publishedAt: { lte: new Date() }, isActive: true },
    });
    if (!news) {
      throw new BadRequestException('沒有找到對應最新消息');
    }

    // 更新最新消息瀏覽次數
    const updatedNews = await this.prisma.news.update({
      data: { views: { increment: 1 } },
      where: { id },
    });

    return updatedNews;
  }
}
