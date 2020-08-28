import React from "react";
import Contact from "../components/Contact";
import ContactForm from "../components/ContactForm";

const ContactPg = () => {
  return (
    <div>
      <Contact />
      <ContactForm />
      <br />
      <br />
      <section class='hero is-medium is-warning is-bold'>
        <div class='hero-body'>
          <div class='container'></div>
        </div>
      </section>
    </div>
  );
};

export default ContactPg;
