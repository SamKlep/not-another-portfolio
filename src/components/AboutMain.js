import React from "react";

const AboutMain = () => {
  return (
    <div>
      <section className='section is-large'>
        <div className='container'>
          <h1 className='title'>About</h1>
          <h2 className='subtitle'>something else about me.</h2>

          <figure className='image is-128x128'>
            <img
              className='is-rounded'
              src='/assets/images/sam_portfolio_face.png'
            />
          </figure>
          <p>
            Nam quis tellus risus. Fusce id leo id ex semper laoreet. Cras quis
            pellentesque nunc. Donec at sem sed risus congue consequat id eu
            leo. Sed sed aliquet eros, et tempus diam. Phasellus ac ligula at
            eros commodo ullamcorper id rutrum purus. Curabitur bibendum velit
            ut rhoncus bibendum. Vestibulum ac ligula non ex aliquam porta.
          </p>
        </div>
      </section>
    </div>
  );
};
export default AboutMain;
