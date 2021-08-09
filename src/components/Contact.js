import React from "react";
import emailjs from "emailjs-com";
// import {Linking} from 'react-native'

function Contact(props) {
  return (
    <div className="Contact snap">
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
          <button type="submit" title="support@example.com">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
