// lib/validation.ts
import { z } from "zod";

export const formSchema = z.object({
  fullname: z.string().trim().min(1, { message: "Name is required" }),
  email: z
    .string()
    .trim()
    .min(1, { message: "Email is required" })
    .or(z.string().email({ message: "Invalid email address" })),
  phone: z
    .string()
    .trim()
    .min(1, { message: "Phone is required" })
    .and(
      z.string().regex(/^\+\d{1,3}\d{7,}$/, {
        message:
          "Phone number must start with a '+' followed by the country code",
      })
    ),
});
