import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <section className='hero is-dark is-bold'>
        <div className='hero-body'>
          <div className='container'></div>
        </div>
      </section>
      <section className='section is-medium about-main-image'>
        <div className='container has-text-centered'>
          <h1 className='title'>Greetings.</h1>
          <h2 className='subtitle'>I'm Samuel Klepper,</h2>

          <img
            className='image-self'
            src='/assets/images/sam_portfolio_face.png'
            alt='sam'
          />
          <p className='is-size-5'>
            {" "}
            I'm a full-stack <strong>Web Developer</strong> from{" "}
            <strong>Houston, TX.</strong>
          </p>
          <Link to='/about'>
            <button className='button is-info is-rounded'>Learn more</button>
          </Link>
        </div>
      </section>
    </div>
  );
};
export default About;
