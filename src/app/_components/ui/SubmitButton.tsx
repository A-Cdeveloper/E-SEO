"use client";

import { useTranslations } from "next-intl";
import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const t = useTranslations("ContactPage");
  const { pending } = useFormStatus();

  console.log(t);

  return (
    <div className="text-right">
      <button type="submit" disabled={pending}>
        {pending ? t("form.sending") : t("form.submit")}
      </button>
    </div>
  );
}
