import React, { useEffect } from "react";

function Home(props) {
  return (
    <div className="Home snap">
      <div className="links">
        <a href="https://github.com/mylliejohnson" target="_blank">
          GitHub
        </a>
        <a href="https://linkedin.com/mylliejohnson" target="_blank">
          LinkedIn
        </a>
        <a
          href="https://docs.google.com/document/d/1g3jyi6lNc5L5oJh3S0xposBEjZXHre28_fpUb5e41nA/edit?usp=sharing"
          target="_blank"
        >
          Resume
        </a>
      </div>
      <div className="name">
        <h1>myllie johnson.</h1>
        <h3>WEB DEVELOPER</h3>
      </div>
      <div className="about-me">
       <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id
        libero elementum, interdum tellus a, lobortis nunc. Praesent tristique
        viverra eros eu blandit.
        <br />
        Donec eget sapien vulputate, scelerisque arcu ac, tincidunt purus.
        Praesent tristique viverra eros blandit.
        <br />
        Donec eget sapien vulputate, scelerisque arcu ac, tincidunt
        purus.Praesent tristique viverra eros eu blandit. Donec eget sapien
        vulputate, scelerisque arcu ac, tincidunt purus.</p>
      </div>
    </div>
  );
}

export default Home;
