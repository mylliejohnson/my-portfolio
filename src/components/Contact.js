import React from "react";

function Contact(props) {
  let divStyle = {
    height: "100vh",
    backgroundColor: "#76a5af",
  };

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
    <div className="Contact" style={divStyle}>
      {/* <div style={contactStyles}>
                <p>links: resume, github, linkedin</p>
                <p>mylliejohnson@gmail.com</p>
            </div> */}
      <div>
        <form>
          <input type="email" placeholder="email address" />
          <input type="text" placeholder="first and last name" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
