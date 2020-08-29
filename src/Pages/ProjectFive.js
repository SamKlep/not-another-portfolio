import React from "react";
import ProjectBreadcrumb from "../components/ProjectBreadcrumb";

const ProjectFive = () => {
  return (
    <div>
      <ProjectBreadcrumb />
      <div className=''>
        <section class='hero is-medium is-light is-bold'>
          <div class='hero-body'>
            <div class='container'>
              <h1 className='title'>Project 5</h1>
              <h2 className='subtitle'>Ultra Demolition</h2>

              <img
                className='project-image'
                src='/assets/images/laptop-5.jpg '
              />
              <section className='section'>
                <div className='container'>
                  <h2 className='is-size-4'>
                    This was my first site made for a client. It was a new
                    experience working with someone elses design and input on
                    the process. I had to use their content and resize many
                    images.
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
                          HTML, CSS, Git & WordPress.
                        </p>
                      </article>
                    </div>
                    <div className='tile is-parent'>
                      <article className='tile is-child box'>
                        <p className='title has-text-centered'>Learned</p>
                        <p className='has-text-centered is-size-5'>
                          How to make images responsive and retain their clarity
                          after re-sizing. How to set a proper time-frame for
                          you to complete the work within the parameters given,
                          and properly pay yourself.
                        </p>
                      </article>
                    </div>
                    <div className='tile is-parent'>
                      <article className='tile is-child box'>
                        <p className='title has-text-centered'>Challenges</p>
                        <p className='has-text-centered is-size-5'>
                          The resizing of the images alone was a grand task that
                          I was not 100% familiar with. I found a good site that
                          would give you multiple sizes once you uploaded the
                          image.
                        </p>
                      </article>
                    </div>
                    <div className='tile is-parent'>
                      <article className='tile is-child box'>
                        <p className='title has-text-centered'>Future</p>
                        <p className='has-text-centered is-size-5'>
                          I would get more into the customizing side of
                          WordPress since their out of the box product does not
                          offer that much customizablity from the CSS side.
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
                <a href='/projectfour' className='pagination-previous'>
                  Previous
                </a>
                <a href='/projectsix' className='pagination-next'>
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

export default ProjectFive;
