import * as z from 'zod';

export const loginSchema = z.object({
  email: z.string().email({
    message: 'Email is required and must be a valid email address',
  }),
  password: z.string().min(1, {
    message: 'Password is required',
  }),
});

export type LoginSchema = typeof loginSchema;
