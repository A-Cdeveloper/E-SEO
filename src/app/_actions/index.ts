"use server";

import { formSchema } from "@/lib/validation";

const timeout = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const sendMessage = async (
  previousState: unknown,
  formData: FormData
): Promise<{ status: "success" | "error"; message: string[] }> => {
  const custumer = {
    fullname: formData.get("fullname"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  };
  await timeout(2000);

  // Zod validation
  const validation = formSchema.safeParse(custumer);

  if (!validation.success) {
    const errors = validation.error.issues.map((issue) => {
      console.log(issue);
      return issue.message;
    });

    return { status: "error", message: errors as string[] };
  }

  return {
    status: "success",
    message: [
      `Thank you for your message ${custumer.fullname}. We will get back to you shortly.`,
    ],
  };
  //revalidatePath("/contact");
};
