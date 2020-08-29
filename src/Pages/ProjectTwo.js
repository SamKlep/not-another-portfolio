import React from "react";
import ProjectBreadcrumb from "../components/ProjectBreadcrumb";

const ProjectTwo = () => {
  return (
    <div>
      <ProjectBreadcrumb />
      <div className=''>
        <section class='hero is-medium is-light is-bold'>
          <div class='hero-body'>
            <div class='container'>
              <h1 class='title'>Find a House</h1>
              <h2 class='subtitle'>Property searching just got so easy.</h2>
              <a href='https://findahouse.herokuapp.com/'>
                <p className='is-size-5'>https://findahouse.herokuapp.com/</p>
              </a>
              <img
                className='project-image'
                src='/assets/images/laptop-2.jpg '
              />
              <section className='section'>
                <div className='container'>
                  <h2 className='is-size-4'>
                    This was another Django exercise, but a full-stack web
                    application this time with a fully functioning admin panel.
                    The admin would be able to perform all CRUD operations from
                    the backend to be able to manage listings, photos and
                    realtors.
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
                          Python, Django, HTML, CSS, Bootstrap, Git & Heroku.
                        </p>
                      </article>
                    </div>
                    <div className='tile is-parent'>
                      <article className='tile is-child box'>
                        <p className='title has-text-centered'>Learned</p>
                        <p className='has-text-centered is-size-5'>
                          How to set up a superuser and manage all data and
                          assets. More practice with Python/Django syntax and
                          deployment.
                        </p>
                      </article>
                    </div>
                    <div className='tile is-parent'>
                      <article className='tile is-child box'>
                        <p className='title has-text-centered'>Challenges</p>
                        <p className='has-text-centered is-size-5'>
                          Since I've only had experience with JavaScript, the
                          concepts at hand were clear but actually doing them
                          and getting it to work was a different story! And
                          working with static assets was something entirely new
                          to me. So to say the least, research, tinkering and
                          time were my best friends.
                        </p>
                      </article>
                    </div>
                    <div className='tile is-parent'>
                      <article className='tile is-child box'>
                        <p className='title has-text-centered'>Future</p>
                        <p className='has-text-centered is-size-5'>
                          I'd like to add more available features for the
                          realtors to interact with the potential buyers. Maybe
                          a live chat feature with web-sockets and updated CSS
                          styling.
                        </p>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectTwo;
