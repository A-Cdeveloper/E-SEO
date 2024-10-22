"use client";
import { useFormState } from "react-dom";
import { sendMessage } from "../_actions";
import { SubmitButton } from "./SubmitButton";

const Form = () => {
  const [state, action] = useFormState(sendMessage, null);

  console.log(state);

  if (state?.status === "success") {
    return <p className="text-green">{state.message[0]}</p>;
  }

  return (
    <>
      <form action={action}>
        <div>
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="Full name"
            // required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            // required
          />
        </div>
        <div>
          <input
            type="phone"
            name="phone"
            id="phone"
            placeholder="Phone"
            // required
          />
        </div>
        <div>
          <textarea name="message" id="message" placeholder="Message" />
        </div>
        {state?.status === "error" &&
          state.message.map((error) => (
            <p key={error} className="mb-0 text-orange-normal">
              {error}
            </p>
          ))}
        <SubmitButton />
      </form>
    </>
  );
};

export default Form;
