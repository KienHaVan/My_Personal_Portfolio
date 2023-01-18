import React, { useRef } from "react";
import About from "./components/layout/About";
import Banner from "./components/layout/Banner";
import Header from "./components/layout/Header";
import Skill from "./components/layout/Skill";
import Qualification from "./components/layout/Qualification";
import Project from "./components/layout/Project";
import Contact from "./components/layout/Contact";
import Footer from "./components/layout/Footer";

function App() {
  const aboutRef = useRef(null);
  const executeScroll = () => aboutRef.current.scrollIntoView();
  return (
    <>
      <Header aboutScroll={executeScroll} />
      <div className="page-container">
        <Banner />
        <About ref={aboutRef} />
        <Skill />
        <Qualification />
        <Project />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
