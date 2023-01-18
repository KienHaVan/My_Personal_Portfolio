import React from "react";
import About from "./components/layout/About";
import Banner from "./components/layout/Banner";
import Header from "./components/layout/Header";
import Skill from "./components/layout/Skill";
import Qualification from "./components/layout/Qualification";
import Project from "./components/layout/Project";
import Contact from "./components/layout/Contact";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="page-container">
        <div id="#banner">
          <Banner />
        </div>
        <About />
        <Skill />
        <div id="qualification">
          <Qualification />
        </div>
        <Project />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
