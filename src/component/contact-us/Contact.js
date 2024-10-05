import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Banner from "../Banner/Banner";
import ContactList from "./ContactList";

const Contact = () => {
  return (
    <div>
      <Header />
      <Banner url={"contact.png"} />
      <ContactList/>
      <Footer />
    </div>
  );
};

export default Contact;
