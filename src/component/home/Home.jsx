import React from "react";
import Hero from "../hero/Hero";
import Why from "../why/Why";
import Goal from "../goal/Goal";
import Brand from "../brand/Brand";
import CallToAction from "../call-to-action/CallToAction";

const Home = () => {
  return (
    <div>
      <Hero />
      <Goal />
      <Why />
      <CallToAction />
    </div>
  );
};

export default Home;
