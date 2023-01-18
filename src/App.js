import React, { useRef } from "react";
import About from "./components/layout/About";
import Banner from "./components/layout/Banner";
import Header from "./components/layout/Header";
import Skill from "./components/layout/Skill";
import Qualification from "./components/layout/Qualification";
import Project from "./components/layout/Project";
import Contact from "./components/layout/Contact";
import Footer from "./components/layout/Footer";
import { Images } from "./assets";

const list = [
  {
    id: 1,
    link: "#home",
    icon: Images.HOME,
    name: "Home",
    ref: React.createRef(),
  },
  {
    id: 2,
    link: "#about",
    icon: Images.ABOUT,
    name: "About",
    ref: React.createRef(),
  },
  {
    id: 3,
    link: "#skills",
    icon: Images.SKILLS,
    name: "Skills",
    ref: React.createRef(),
  },
  {
    id: 4,
    link: "#qualification",
    icon: Images.QUALIFICATION,
    name: "Qualification",
    ref: React.createRef(),
  },
  {
    id: 5,
    link: "#project",
    icon: Images.PROJECT,
    name: "Projects",
    ref: React.createRef(),
  },
  {
    id: 6,
    link: "#contact",
    icon: Images.SEND,
    name: "Contact",
    ref: React.createRef(),
  },
];

function App() {
  return (
    <>
      <Header list={list} />
      <div className="page-container">
        <Banner section={list[0]} />
        <About section={list[1]} />
        <Skill section={list[2]} />
        <Qualification section={list[3]} />
        <Project section={list[4]} />
        <Contact section={list[5]} />
      </div>
      <Footer />
    </>
  );
}

export default App;
