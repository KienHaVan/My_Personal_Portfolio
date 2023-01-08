import React from "react";
import About from "./components/layout/About";
import Banner from "./components/layout/Banner";
import Header from "./components/layout/Header";
import Skill from "./components/layout/Skill";
import Qualification from "./components/layout/Qualification";

function App() {
  return (
    <>
      <Header />
      <div className="page-container">
        <Banner />
        <About />
        <Skill />
        <Qualification />
      </div>
    </>
  );
}

export default App;
