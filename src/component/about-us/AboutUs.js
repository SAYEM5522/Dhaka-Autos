import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Banner from "../Banner/Banner";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <Banner url={"/about.png"} title={"ABOUT US"} />
      <Footer />
    </div>
  );
};

export default AboutUs;
