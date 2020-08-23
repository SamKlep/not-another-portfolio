import React from "react";

import "./App.css";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Footer from "./components/Footer";
import Section from "./components/Section";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className='App'>
      <Navigation />
      <About />
      <Section />
      <Footer />
    </div>
  );
}

export default App;
