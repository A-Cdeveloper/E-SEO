"use client";
import { useFormState } from "react-dom";
import { sendMessage } from "../_actions";
import { SubmitButton } from "./SubmitButton";

const Form = () => {
  const [state, action] = useFormState(sendMessage, null);

  if (state?.status === "success") {
    return <p>{state?.message}</p>;
  }

  return (
    <form action={action}>
      <div>
        <input
          type="text"
          name="fullname"
          id="fullname"
          placeholder="Full name"
          required
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required
        />
      </div>
      <div>
        <input type="phone" name="phone" id="phone" placeholder="Phone" />
      </div>
      <div>
        <textarea name="message" id="message" placeholder="Message" />
      </div>
      <SubmitButton />
    </form>
  );
};

export default Form;
