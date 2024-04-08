import React from "react";
import "./Forms.css";

type FormProps = {
  name: string;
  email: string;
  message: string;
};
const formInput: FormProps = {
  name: "",
  email: "",
  message: "",
};

const EmailForm = () => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    formInput[name] = value;

    console.log(formInput[name], typeof name);
  };
  return (
    <form className="form-email-container">
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" onChange={handleChange} />

      <label htmlFor="email">Email</label>
      <input type="text" id="email" />

      <label htmlFor="message">Message</label>
      <textarea className="form-input-message" id="message" />

      <button type="submit">Send</button>
    </form>
  );
};

export default EmailForm;
