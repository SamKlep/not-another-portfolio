import React from "react";

const AboutMain = () => {
  return (
    <div>
      <section className='section is-large about-image'>
        <div className='container has-text-centered '>
          <div className='container  '>
            <h1 className='title'>About</h1>
            <h2 className='subtitle'></h2>

            <figure className='image is-128x128 about-image is-inline-block'>
              <img
                className='is-rounded'
                src='/assets/images/sam_portfolio_face.png'
              />
            </figure>
            <p>
              I have a passion for all things tech and have been intrigued by it
              all my life-- especially the blockchain and cryptocurrency. I
              primarily work in Javascript, NodeJS and React but have recently
              started learning React VR and Django.
            </p>
            <button class='button is-info  is-rounded'>My Resume</button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default AboutMain;
