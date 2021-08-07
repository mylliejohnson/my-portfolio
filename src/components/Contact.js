import React from "react";

function Contact(props) {
  let contactStyles = {
    lineHeight: ".25",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    top: "25%",
  };

  return (
    <div className="Contact">
      <h2>I'd love to hear from you!</h2>

      {/* <form>
        <input type="email" placeholder="email address" />
        <input type="text" placeholder="first and last name" />
      </form> */}
    </div>
  );
}

export default Contact;
