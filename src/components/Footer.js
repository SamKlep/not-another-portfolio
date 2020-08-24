import React from "react";
import ScrollUp from "./ScrollUp";

const Footer = () => {
  return (
    <div>
      <footer className='footer'>
        <div className='content has-text-centered'>
          <p>
            <strong>Built</strong> with 💜 by
            <a href='https://github.com/samklep'> Samuel Klepper</a>
          </p>
        </div>
        <ScrollUp />
      </footer>
    </div>
  );
};
export default Footer;
