"use server";

import { formSchema } from "@/lib/validation";
import EmailTemplate from "@/templates/EmailTemplate";
import { Resend } from "resend";

//const timeout = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const sendMessage = async (
  previousState: unknown,
  formData: FormData
): Promise<{ status: "success" | "error"; message: string[] }> => {
  const custumer = {
    fullname: formData.get("fullname") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    message: formData.get("message") as string,
  };
  //await timeout(2000);

  // Zod validation
  const validation = formSchema.safeParse(custumer);

  if (!validation.success) {
    const errors = validation.error.issues.map((issue) => {
      //console.log(issue);
      return issue.message;
    });

    return { status: "error", message: errors as string[] };
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
      message: [
        `Thank you for your message ${custumer.fullname}. We will get back to you shortly.`,
      ],
    };
  } catch (error) {
    return {
      status: "error",
      message: error as string[],
    };
  }

  //revalidatePath("/contact");
};
