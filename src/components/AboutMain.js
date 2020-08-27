import React from "react";

const AboutMain = () => {
  return (
    <div>
      <section className='section is-medium is-bold about-image'>
        <div className='container'>
          <div className='container has-text-centered '>
            <div className='container about-content '>
              <h1 className='title'></h1>
              <h2 className='subtitle'></h2>

              <img
                className='image-self'
                src='/assets/images/sam_portfolio_face.png'
              />
              <br />
              <br />
              <p className='is-size-5'>
                I have experience working as a freelance developer and manage a
                few websites for clients. I come from a design background and
                utilize that skill in to my designs. I have a passion for all
                things tech and have been intrigued by it all my life--
                especially the blockchain and cryptocurrency. I primarily work
                in Javascript, NodeJS, Express, MongoDB and React; but have
                recently started learning React VR, Django and IoT devices
                (Raspberry Pi, Arduino, ESP8266).
              </p>
              <br />
              <a
                href='/assets/images/S.KlepperResume.pdf'
                target='_blank'
                rel='noreferrer'
              >
                <button className='button is-info  is-rounded'>
                  My Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default AboutMain;
