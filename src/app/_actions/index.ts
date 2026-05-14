"use server";

import { createFormSchema } from "@/utils/formvalidation";
import EmailTemplate from "@/email-templates/EmailTemplate";
import { checkContactRateLimit } from "@/utils/contactRateLimit";
import { Resend } from "resend";
import { getTranslations } from "next-intl/server";
import { headers } from "next/headers";

/** Verified sender in Resend — production only (no env). */
const CONTACT_FORM_FROM = "E-SEO <office@e-seo.info>";

/** Resend test sender — use locally so `from` does not require your verified domain. */
const RESEND_LOCAL_FROM = "onboarding@resend.dev";

//const timeout = (ms: number) => new Promise((res) => setTimeout(res, ms));

export type ErrorTypeArr = { field: string; message: string };

export type ContactFormValues = {
  fullname: string;
  email: string;
  phone: string;
  message: string;
};

export type SendMessageState =
  | null
  | {
      status: "success";
      message: string;
    }
  | {
      status: "error";
      message: string | ErrorTypeArr[];
      values: ContactFormValues;
    };

export const sendMessage = async (
  previousState: SendMessageState,
  formData: FormData,
): Promise<SendMessageState> => {
  const custumer: ContactFormValues = {
    fullname: (formData.get("fullname") as string) ?? "",
    email: (formData.get("email") as string) ?? "",
    phone: (formData.get("phone") as string) ?? "",
    message: (formData.get("message") as string) ?? "",
  };

  const t = await getTranslations("ContactPage");

  // Zod validation
  const zodObj = await createFormSchema();
  const validation = zodObj.safeParse(custumer);

  if (!validation.success) {
    const errorArr: ErrorTypeArr[] = [];
    validation.error.issues.map((issue) => {
      errorArr.push({
        field: issue.path[0] as string,
        message: issue.message,
      });
      return errorArr;
    });

    return {
      status: "error",
      message: errorArr as ErrorTypeArr[],
      values: custumer,
    };
  }

  const headerList = await headers();
  const clientIp =
    headerList.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    headerList.get("x-real-ip")?.trim() ||
    "unknown";
  const max = Number(process.env.CONTACT_RATE_LIMIT_MAX) || 5;
  const windowMs =
    Number(process.env.CONTACT_RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000;
  if (!checkContactRateLimit(`contact:${clientIp}`, max, windowMs)) {
    return {
      status: "error",
      message: t("rateLimit"),
      values: custumer,
    };
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const fromAddress =
      process.env.NODE_ENV === "development"
        ? RESEND_LOCAL_FROM
        : CONTACT_FORM_FROM;
    await resend.emails.send({
      from: fromAddress,
      to: "kontakt@e-seo.info",
      subject: "Form from E-SEO Website",
      react: EmailTemplate({ ...custumer }),
    });
    return {
      status: "success",
      // message: `Thank you for your message ${custumer.fullname}.
      // We will get back to you shortly.`,
      message: t("successMsg"),
    };
  } catch (error) {
    return {
      status: "error",
      message: error instanceof Error ? error.message : String(error),
      values: custumer,
    };
  }

  //revalidatePath("/contact");
};
