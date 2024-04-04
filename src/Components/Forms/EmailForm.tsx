import "./Forms.css"

const EmailForm = () => {
  return (
    <form className="form-email-container">
        <label htmlFor="name">Name</label>
        <input type="text" id="name"  />

        <label htmlFor="email">Email</label>
        <input type="text" id="email"  />

        <label htmlFor="message">Message</label>
        <textarea className="form-input-message" id="message"  />

        <button type="submit">Send</button>
    </form>
  )
}

export default EmailForm