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
import ProjectTwo from "./Pages/ProjectTwo";
import ProjectThree from "./Pages/ProjectThree";
import ProjectFour from "./Pages/ProjectFour";
import ProjectFive from "./Pages/ProjectFive";
import ProjectSix from "./Pages/ProjectSix";

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
        <Route path='/projecttwo' component={ProjectTwo} />
        <Route path='/projecthree' component={ProjectThree} />
        <Route path='/projectfour' component={ProjectFour} />
        <Route path='/projectfive' component={ProjectFive} />
        <Route path='/projectsix' component={ProjectSix} />
        <Route path='/contact' component={Contact} />
      </Switch>
      <Section />
      <Footer />
    </Router>
  );
}

export default App;
