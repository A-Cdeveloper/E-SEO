import React from "react";

const Form = () => {
  return (
    <form>
      <div>
        <input
          type="text"
          name="name"
          id="name"
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
      <div className="text-right">
        <button type="submit">Send</button>
      </div>
    </form>
  );
};

export default Form;
