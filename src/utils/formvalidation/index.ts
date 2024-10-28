// lib/validation.ts
import { z } from "zod";
import { getTranslations } from "next-intl/server";

export const createFormSchema = async () => {
  const t = await getTranslations("ContactPage");

  return z.object({
    fullname: z
      .string()
      .trim()
      .min(1, { message: t("validation.nameRequired") }),
    email: z
      .string()
      .trim()
      .min(1, { message: t("validation.emailRequired") })
      .or(z.string().email({ message: t("validation.emailInvalid") })),
    phone: z
      .string()
      .trim()
      .min(1, { message: t("validation.phoneRequired") })
      .refine((val) => /^\+\d{1,3}\d{7,}$/.test(val), {
        message: t("validation.phoneFormat"),
      }),
  });
};
