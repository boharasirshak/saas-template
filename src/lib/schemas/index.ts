import * as z from 'zod';

export const loginSchema = z.object({
  email: z.string().email({
    message: 'Email is required and must be a valid email address',
  }),
  password: z.string().min(1, {
    message: 'Password is required',
  }),
});

export const registerSchema = z.object({
  email: z.string().email({
    message: 'Email is required and must be a valid email address',
  }),
  password: z.string().min(8),
  confirm: z.string().min(8)
})
  .refine((data) => data.password == data.confirm, {
    message: "Passwords didn't match",
    path: ["confirm"]
  });

export type RegisterSchema = typeof registerSchema;
export type LoginSchema = typeof loginSchema;
