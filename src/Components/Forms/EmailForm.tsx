import React from "react";
import { FormInputProps } from "../../Pages/Panel/Panel";
import "./Forms.css";

type EmailFormProps = {
  submitMessage: (formInput: FormInputProps, e: React.MouseEvent) => void;
};

const formInput: { [index: string]: string } = {
  name: "",
  email: "",
  message: "",
};

const EmailForm = ({ submitMessage }: EmailFormProps) => {
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    formInput[name] = value;

    console.log(formInput[name], name);
  };
  return (
    <form className="form-email-container">
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" onChange={handleChange} />

      <label htmlFor="email">Email</label>
      <input type="text" id="email" name="email" onChange={handleChange} />

      <label htmlFor="message">Message</label>
      <textarea
        className="form-input-message"
        id="message"
        name="message"
        onChange={handleChange}
      />

      <button type="submit" onClick={(e) => submitMessage(formInput, e)}>
        Send
      </button>
    </form>
  );
};

export default EmailForm;
