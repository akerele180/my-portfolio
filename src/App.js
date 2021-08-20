import React from "react";
import Header from "./Header";
import NavBar from './NavBar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './About'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <About />
    </div>
  );
}

export default App;
