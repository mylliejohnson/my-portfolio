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
          <li><a href="#home">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
        <Home />
        <Projects />
        <Contact />
    </div>
  );
}

export default App;
