import { Role } from '@prisma/client';
import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const ReservationInSchema = z.object({
  eventId: z.string().min(1),
});
export class ReservationInDto extends createZodDto(ReservationInSchema) {}

export const ReservationOutSchema = z.object({
  id: z.string().min(1),
  event: z.object({
    id: z.string().min(1),
    title: z.string().min(1),
    description: z.string().nullish().default(null),
    startDateTime: z.date(),
    endDateTime: z.date(),
    location: z.string().nullish().default(null),
    isActive: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date(),
  }),
  user: z.object({
    id: z.string().min(1),
    email: z.string().email().min(1),
    name: z.string().min(1),
    role: z.nativeEnum(Role),
    createdAt: z.date(),
    updatedAt: z.date(),
  }),
});
export class ReservationOutDto extends createZodDto(ReservationOutSchema) {}
