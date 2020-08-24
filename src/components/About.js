import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <section className='section is-large about-main-image'>
        <div className='container has-text-centered'>
          <h1 className='title'>Greetings.</h1>
          <h2 className='subtitle'>I'm Samuel Klepper,</h2>
          <figure className='image is-128x128 is-inline-block'>
            <img
              className='is-rounded'
              src='/assets/images/sam_portfolio_face.png'
            />
          </figure>
          <p>
            {" "}
            I'm a <strong>Web Developer</strong> from{" "}
            <strong>Houston, TX.</strong>
          </p>
          <Link to='/about'>
            <button class='button is-info is-rounded'>Learn more</button>
          </Link>
        </div>
      </section>
    </div>
  );
};
export default About;
