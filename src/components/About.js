import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <section className='section is-medium about-main-image'>
        <div className='container has-text-centered'>
          <h1 className='title'>Greetings.</h1>
          <h2 className='subtitle'>I'm Samuel Klepper,</h2>

          <img
            className='image-self'
            src='/assets/images/sam_portfolio_face.png'
          />
          <p>
            {" "}
            I'm a full-stack <strong>Web Developer</strong> from{" "}
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
