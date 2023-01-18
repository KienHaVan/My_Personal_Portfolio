import React from "react";
import About from "./components/layout/About";
import Banner from "./components/layout/Banner";
import Header from "./components/layout/Header";
import Skill from "./components/layout/Skill";
import Qualification from "./components/layout/Qualification";
import Project from "./components/layout/Project";
import Contact from "./components/layout/Contact";

function App() {
  return (
    <>
      <Header />
      <div className="page-container">
        <Banner />
        <About />
        <Skill />
        <Qualification />
        <Project />
        <Contact />
      </div>
    </>
  );
}

export default App;
