import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const EventInSchema = z
  .object({
    title: z.string().min(1),
    description: z.string().nullish().default(null),
    startDateTime: z.string().datetime(),
    endDateTime: z.string().datetime(),
    location: z.string().nullish().default(null),
    isActive: z.boolean().or(z.string().transform((value) => value === 'true')),
  })
  .refine((data) => new Date(data.startDateTime) > new Date(), {
    path: ['startDateTime'],
    message: 'Start date must be in the future',
  })
  .refine((data) => new Date(data.startDateTime) < new Date(data.endDateTime), {
    path: ['endDateTime'],
    message: 'End date must be after start date',
  });
export class EventInDto extends createZodDto(EventInSchema) {}

export const EventOutSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  description: z.string().nullish().default(null),
  startDateTime: z.date(),
  endDateTime: z.date(),
  location: z.string().nullish().default(null),
  isActive: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
});
export class EventOutDto extends createZodDto(EventOutSchema) {}
