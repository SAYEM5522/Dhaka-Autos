import React from "react";
import Banner from "../Banner/Banner";
import ContactList from "./ContactList";

const Contact = () => {
  return (
    <div>
      <Banner url={"contact.png"} />
      <ContactList />
    </div>
  );
};

export default Contact;
