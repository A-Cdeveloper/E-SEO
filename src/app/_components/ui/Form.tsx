"use client";
import { useFormState } from "react-dom";
import { sendMessage } from "../../_actions";
import FormErrorMessages from "./FormError";
import { SubmitButton } from "./SubmitButton";

const Form = () => {
  const [state, action] = useFormState(sendMessage, null);

  if (state?.status === "success") {
    return <p className="text-green">{state.message as string}</p>;
  }

  return (
    <>
      <form action={action} className="pe-7 pb-5">
        <div>
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="Full name"

            // required
          />
          <FormErrorMessages message={state?.message} field="fullname" />
        </div>
        <div>
          <input type="email" name="email" id="email" placeholder="Email" />
          <FormErrorMessages message={state?.message} field="email" />
        </div>
        <div>
          <input type="phone" name="phone" id="phone" placeholder="Phone" />
          <FormErrorMessages message={state?.message} field="phone" />
        </div>
        <div>
          <textarea name="message" id="message" placeholder="Message" />
        </div>
        <SubmitButton />
      </form>
    </>
  );
};

export default Form;
