"use server";

// import { redirect } from "next/navigation";
// import { revalidatePath } from "next/cache";

const timeout = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const sendMessage = async (
  previousState: unknown,
  formData: FormData
) => {
  const custumer = {
    fullname: formData.get("fullname"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  };
  await timeout(2000);
  console.log(custumer);
  return {
    status: "success",
    message: `Thank you for your message ${custumer.fullname}. We will get back to you shortly.`,
  };
  //revalidatePath("/contact");
};
