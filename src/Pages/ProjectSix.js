import React from "react";
import ProjectBreadcrumb from "../components/ProjectBreadcrumb";
import { Link } from "react-router-dom";

const ProjectSix = () => {
  return (
    <div>
      <ProjectBreadcrumb />
      <div className=''>
        <section class='hero is-medium is-light is-bold'>
          <div class='hero-body'>
            <div class='container'>
              <h1 className='title'>Project 6</h1>
              <h2 className='subtitle'>Sam's Blog</h2>

              <img
                className='project-image'
                src='/assets/images/laptop-62.jpg'
                alt='project 6'
              />
              <section className='section'>
                <div className='container'>
                  <h2 className='is-size-4'>
                    This was my first time using GatsbyJS. I was intrigued by
                    the static site generator aspect to it. It seemed like an
                    easy process to get a brochure site up and running, and even
                    easier to maintin the content via MDX.
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
                          GatsbyJS, React, GraphQL, MDX, Bootstrap, Git &
                          Netlify.
                        </p>
                      </article>
                    </div>
                    <div className='tile is-parent'>
                      <article className='tile is-child box'>
                        <p className='title has-text-centered'>Learned</p>
                        <p className='has-text-centered is-size-5'>
                          How to set up a Gatsby static site, maintain the
                          content and how to use QraphQL.
                        </p>
                      </article>
                    </div>
                    <div className='tile is-parent'>
                      <article className='tile is-child box'>
                        <p className='title has-text-centered'>Challenges</p>
                        <p className='has-text-centered is-size-5'>
                          Since all of this was totally new, adding new pages
                          with the cereatePages API was some-what alien. But
                          once you get it going one can see the benefits
                          immediately.
                        </p>
                      </article>
                    </div>
                    <div className='tile is-parent'>
                      <article className='tile is-child box'>
                        <p className='title has-text-centered'>Future</p>
                        <p className='has-text-centered is-size-5'>
                          I would learn how to make API calls with Gatsby and
                          make the main image for NASA's image of the day a live
                          image.
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
                <Link to='/projectfive' className='pagination-previous'>
                  Previous
                </Link>
                <Link to='/projectone' className='pagination-next'>
                  Next page
                </Link>
              </nav>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectSix;
