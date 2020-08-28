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
                I have experience working as a freelance web developer and
                manage a few websites for clients. I come from a graphic design
                & illustration background—- so naturally I incorporate those
                skills in to my web development process. I have a passion for
                all things tech and have been intrigued by it all my life. I
                primarily work with the MERN stack but have lately been trying
                out new languages and frameworks.
                <br />
                <br />
                Aside from being a web developer, I like to enjoy the great
                outdoors as much as possible. I enjoy gardening, bird-watching,
                and feeding squirrels. I’m an avid science-fiction reader and a
                long-time Spider-Man comic-book collector. In spare time, I like
                to paint and play VR video games. I also have three lovely
                felines and one loyal canine companion.
              </p>
              <br />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default AboutMain;
