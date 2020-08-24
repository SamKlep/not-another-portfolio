import React from "react";

import "./App.css";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Footer from "./components/Footer";
import Section from "./components/Section";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route path='/skills' component={Skills} />
        <Route path='/projects' component={Projects} />
        <Route path='/contact' component={Contact} />
      </Switch>
      <Section />
      <Footer />
    </Router>
  );
}

export default App;
