"use client";
import { useFormState } from "react-dom";
import { sendMessage } from "../../_actions";
import FormErrorMessages from "./FormError";
import { SubmitButton } from "./SubmitButton";
import { useTranslations } from "next-intl";

const Form = () => {
  const [state, action] = useFormState(sendMessage, null);
  const t = useTranslations("ContactPage");

  if (state?.status === "success") {
    return <p className="text-turquoise my-5">{state.message as string}</p>;
  }

  return (
    <>
      <form action={action} className="pe-7 pb-5">
        <div>
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder={t("form.fullname")}

            // required
          />
          {state?.message && (
            <FormErrorMessages message={state?.message} field="fullname" />
          )}
        </div>
        <div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder={t("form.email")}
          />
          {state?.message && (
            <FormErrorMessages message={state?.message} field="email" />
          )}
        </div>
        <div>
          <input
            type="phone"
            name="phone"
            id="phone"
            placeholder={t("form.phone")}
          />
          {state?.message && (
            <FormErrorMessages message={state?.message} field="phone" />
          )}
        </div>
        <div>
          <textarea
            name="message"
            id="message"
            placeholder={t("form.message")}
          />
        </div>
        <SubmitButton />
      </form>
    </>
  );
};

export default Form;
