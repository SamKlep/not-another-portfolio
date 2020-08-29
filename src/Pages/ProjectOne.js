import React from "react";
import ProjectBreadcrumb from "../components/ProjectBreadcrumb";

const ProjectOne = () => {
  return (
    <div>
      <ProjectBreadcrumb />
      <div className=''>
        <section className='hero is-medium is-light is-bold'>
          <div className='hero-body'>
            <div className='container'>
              <h1 className='title'>Project 1</h1>
              <h2 className='subtitle'>The Crypto News Network</h2>

              <a href='https://evening-meadow-70637.herokuapp.com/'>
                <p className='is-size-5'>
                  https://evening-meadow-70637.herokuapp.com/
                </p>
              </a>
              <img
                className='project-image'
                src='/assets/images/laptop-1.jpg'
                alt='project 1'
              />

              <section className='section'>
                <div className='container'>
                  <h2 className='is-size-4'>
                    This was a front-end focused project where I made use of the
                    CryptoCompare API. It was the first time I ventured outside
                    of JavaScript and was happy I did. The user can see the
                    latest prices and news in the cryptocurrency world.
                  </h2>
                </div>
              </section>

              <div>
                <div className='container skill-card'>
                  <div className='tile is-ancestor'>
                    <div className='tile is-parent'>
                      <article className='tile is-child box'>
                        <p className='title has-text-centered'>Tech Used</p>

                        <p className='has-text-centered is-size-5'>
                          Python, Django, HTML, CSS, Bootstrap, CryptoCompare
                          API, Git & Heroku.
                        </p>
                      </article>
                    </div>
                    <div className='tile is-parent'>
                      <article className='tile is-child box'>
                        <p className='title has-text-centered'>Learned</p>
                        <p className='has-text-centered is-size-5'>
                          How to set up a virtual environment in Python and
                          utilize PIP. Run a server and upload files to the
                          backend.
                        </p>
                      </article>
                    </div>
                    <div className='tile is-parent'>
                      <article className='tile is-child box'>
                        <p className='title has-text-centered'>Challenges</p>
                        <p className='has-text-centered is-size-5'>
                          Since it was a new language to me, the syntax gave me
                          some trouble but nothing that was not a Google search
                          away. Deploying was a new process for Django that I
                          eventually figured out.
                        </p>
                      </article>
                    </div>
                    <div className='tile is-parent'>
                      <article className='tile is-child box'>
                        <p className='title has-text-centered'>Future</p>
                        <p className='has-text-centered is-size-5'>
                          Eventually, I'd like to add a non-crytpo news section
                          and spruce up the CSS.
                        </p>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
              <nav
                className='pagination'
                role='navigation'
                aria-label='pagination'
              >
                <a href='/projectsix' className='pagination-previous'>
                  Previous
                </a>
                <a href='/projectwo' className='pagination-next'>
                  Next page
                </a>
              </nav>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectOne;
