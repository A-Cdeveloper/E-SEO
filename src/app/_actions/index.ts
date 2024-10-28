"use server";

import { createFormSchema } from "@/utils/formvalidation";
import EmailTemplate from "@/email-templates/EmailTemplate";
import { Resend } from "resend";
import { getTranslations } from "next-intl/server";

//const timeout = (ms: number) => new Promise((res) => setTimeout(res, ms));

export type ErrorTypeArr = { field: string; message: string };

export const sendMessage = async (
  previousState: unknown,
  formData: FormData
): Promise<{
  status: "success" | "error";
  message: string | ErrorTypeArr[];
}> => {
  const custumer = {
    fullname: formData.get("fullname") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    message: formData.get("message") as string,
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

    return { status: "error", message: errorArr as ErrorTypeArr[] };
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "onboarding@resend.dev",
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
      message: error as string,
    };
  }

  //revalidatePath("/contact");
};
