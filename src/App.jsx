import React from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Social from "./components/Social/Social";

const App = () => {
  return (
    <>
      <div className="hero overflow-y-hidden">
        <Header />
        <Hero />
        <Social />
      </div>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
