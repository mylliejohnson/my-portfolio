import logo from "./logo.svg";
import "./App.css";
import { Button, Navbar, Nav } from "react-bootstrap";
import { Link, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
        <Home />
        <Projects />
        <Contact />
    </div>
  );
}

export default App;
