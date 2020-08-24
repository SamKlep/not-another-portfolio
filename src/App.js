import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Section from "./components/Section";

import SkillsPg from "./Pages/Skills";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import AboutPg from "./Pages/About";
import ProjectsPg from "./Pages/Projects";
import ProjectOne from "./Pages/ProjectOne";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={AboutPg} />
        <Route path='/skills' component={SkillsPg} />
        <Route path='/projects' component={ProjectsPg} />
        <Route path='/projectone' component={ProjectOne} />
        <Route path='/contact' component={Contact} />
      </Switch>
      <Section />
      <Footer />
    </Router>
  );
}

export default App;
