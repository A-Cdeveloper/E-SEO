"use client";
import { useActionState, useEffect, useState } from "react";
import { sendMessage, type ContactFormValues } from "../../_actions";
import FormErrorMessages from "./FormError";
import { SubmitButton } from "./SubmitButton";
import { useTranslations } from "next-intl";

const emptyFields: ContactFormValues = {
  fullname: "",
  email: "",
  phone: "",
  message: "",
};

const Form = () => {
  const [state, action] = useActionState(sendMessage, null);
  const [fields, setFields] = useState(emptyFields);
  const t = useTranslations("ContactPage");

  useEffect(() => {
    if (state?.status === "error" && state.values) {
      setFields(state.values);
    }
  }, [state]);

  if (state?.status === "success") {
    return <p className="text-turquoise my-5">{state.message as string}</p>;
  }

  return (
    <>
      <form action={action} className="pe-7 pb-5">
        {state?.status === "error" && typeof state.message === "string" ? (
          <p className="text-orange-normal text-sm mb-4">{state.message}</p>
        ) : null}
        <div>
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder={t("form.fullname")}
            value={fields.fullname}
            onChange={(e) =>
              setFields((f) => ({ ...f, fullname: e.target.value }))
            }
          />
          {Array.isArray(state?.message) ? (
            <FormErrorMessages message={state.message} field="fullname" />
          ) : null}
        </div>
        <div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder={t("form.email")}
            value={fields.email}
            onChange={(e) =>
              setFields((f) => ({ ...f, email: e.target.value }))
            }
          />
          {Array.isArray(state?.message) ? (
            <FormErrorMessages message={state.message} field="email" />
          ) : null}
        </div>
        <div>
          <input
            type="phone"
            name="phone"
            id="phone"
            placeholder={t("form.phone")}
            value={fields.phone}
            onChange={(e) =>
              setFields((f) => ({ ...f, phone: e.target.value }))
            }
          />
          {Array.isArray(state?.message) ? (
            <FormErrorMessages message={state.message} field="phone" />
          ) : null}
        </div>
        <div>
          <textarea
            name="message"
            id="message"
            placeholder={t("form.message")}
            value={fields.message}
            onChange={(e) =>
              setFields((f) => ({ ...f, message: e.target.value }))
            }
          />
        </div>
        <SubmitButton />
      </form>
    </>
  );
};

export default Form;
