import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Hero from "../hero/Hero";
import Why from "../why/Why";
import Goal from "../goal/Goal";
import Brand from "../brand/Brand";
import CallToAction from "../call-to-action/CallToAction";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Goal />
      <Why />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;
