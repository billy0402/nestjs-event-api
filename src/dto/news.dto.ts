import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const NewsInSchema = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
  image: z.string().url().nullish().or(z.literal('')),
  fbLink: z.string().url().nullish().or(z.literal('')),
  publishedAt: z.string().datetime(),
  isActive: z.boolean().or(z.string().transform((value) => value === 'true')),
});
export class NewsInDto extends createZodDto(NewsInSchema) {}

export const NewsOutSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  content: z.string().min(1),
  image: z.string().url().nullish().or(z.literal('')),
  fbLink: z.string().url().nullish().or(z.literal('')),
  views: z.number(),
  publishedAt: z.date(),
  isActive: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
});
export class NewsOutDto extends createZodDto(NewsOutSchema) {}
