"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <div className="text-right">
      <button type="submit" disabled={pending}>
        {pending ? "Sending..." : "Send"}
      </button>
    </div>
  );
}
