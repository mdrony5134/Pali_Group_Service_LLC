import React from "react";
import Banner from "../components/Banner";
import Awards from "../components/Awards";
import Choose from "../components/Choose";
import Service from "../components/Service";
import Faq from "../components/Faq";
import Inspection from "../components/Inspection";
import Contact from "../components/Contact";
import About from "../components/About";

const Home = () => {
  return (
    <div>
      <Banner />
      <Awards />
      <Choose />
      <Service />
      <About />
      <Faq />
      <Inspection />
      <Contact />
    </div>
  );
};

export default Home;
