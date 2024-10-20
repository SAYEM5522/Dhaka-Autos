import React from "react";
import Banner from "../Banner/Banner";
import AboutDetails from "./AboutDetails";
import AboutList from "./AboutList";

const AboutUs = () => {
  return (
    <div>
      <Banner url={"/about.png"} title={"ABOUT US"} />
      <div
        style={{
          backgroundImage: "url('about3.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <AboutDetails />
        <AboutList />
      </div>
    </div>
  );
};

export default AboutUs;
