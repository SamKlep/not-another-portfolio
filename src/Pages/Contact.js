import React from "react";
import Contact from "../components/Contact";
import ContactForm from "../components/ContactForm";

const ContactPg = () => {
  return (
    <div>
      <Contact />
      <ContactForm />
      <br />
      <section class='hero is-medium is-primary is-bold'>
        <div class='hero-body'>
          <div class='container'></div>
        </div>
      </section>
    </div>
  );
};

export default ContactPg;
