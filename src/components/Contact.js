import React from "react";

// LOOK INTO WOO FORMS FOR EMAIL //

function Contact(props) {
  return (
    <div className="Contact snap" id="contact">
      <h2>I'd love to hear from you!</h2>

      <div>
        <form onSubmit="sentEmail">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="* name"
            required
          />
          <input
            type="email"
            id="email"
            name="user_email"
            placeholder="* email address"
            required
          />
          <textarea
            id="message"
            name="message"
            rows="3"
            placeholder="* Leave me a message!"
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
