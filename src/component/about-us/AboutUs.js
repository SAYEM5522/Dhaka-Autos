import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Banner from "../Banner/Banner";
import AboutDetails from "./AboutDetails";
import AboutList from "./AboutList";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <Banner url={"/about.png"} title={"ABOUT US"} />
      <div style={{
          backgroundImage: "url('about3.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center", 
        }}>
      <AboutDetails/>
      <AboutList/>
      </div>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
