import { BrowserRouter, Form } from "react-router-dom";
import React from "react";
import { LanguageProvider } from "./utils/LanguageContext";

const About = React.lazy(() => import("./components/About"));
const Contact = React.lazy(() => import("./components/Contact"));
const Experience = React.lazy(() => import("./components/Experience"));
const Hero = React.lazy(() => import("./components/Hero"));
const Navbar = React.lazy(() => import("./components/Navbar"));
const Team = React.lazy(() => import("./components/Team"));
const Projects = React.lazy(() => import("./components/Projects"));
const Footer = React.lazy(() => import("./components/Footer"));

const App = () => {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <div className="relative z-0 black-gradient">
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Team />
          <Contact />
          <Footer />
        </div>
      </LanguageProvider>
    </BrowserRouter>
  );
};

export default App;
