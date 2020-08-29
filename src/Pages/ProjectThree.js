import React from "react";
import ProjectBreadcrumb from "../components/ProjectBreadcrumb";

const ProjectThree = () => {
  return (
    <div>
      <ProjectBreadcrumb />
      <div className=''>
        <section class='hero is-medium is-light is-bold'>
          <div class='hero-body'>
            <div class='container'>
              <h1 class='title'>Contact Keeper</h1>
              <h2 class='subtitle'>All your contacts in one place.</h2>
              <a href='https://blooming-forest-66299.herokuapp.com/login'>
                <p className='is-size-5'>
                  https://blooming-forest-66299.herokuapp.com/login
                </p>
              </a>
              <img
                className='project-image'
                src='/assets/images/laptop-3.jpg '
              />
              <section className='section'>
                <div className='container'>
                  <h2 className='is-size-4'>
                    This project was my full-stack project while attending
                    Digital Crafts coding bootcamp. It is a MERN application
                    where a user can create an account and perform all CRUD
                    operations to create, read, update and delete contact
                    information.
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
                          MongoDB, ExpressJS, ReactJS, NodeJS, JWT, Git &
                          Bootstrap.
                        </p>
                      </article>
                    </div>
                    <div className='tile is-parent'>
                      <article className='tile is-child box'>
                        <p className='title has-text-centered'>Learned</p>
                        <p className='has-text-centered is-size-5'>
                          How to connect a React front-end to an Express
                          back-end via a proxy, use concurrently to run the
                          font-end server with the back-end server, create an
                          auth/log-in system with JWT, and utilize React Hooks.
                        </p>
                      </article>
                    </div>
                    <div className='tile is-parent'>
                      <article className='tile is-child box'>
                        <p className='title has-text-centered'>Challenges</p>
                        <p className='has-text-centered is-size-5'>
                          Since this was my first full-stack project a lot of
                          the specifics were a little fuzzy and had to research
                          a lot of new concepts. And getting a log-in system
                          working was a task on its own.
                        </p>
                      </article>
                    </div>
                    <div className='tile is-parent'>
                      <article className='tile is-child box'>
                        <p className='title has-text-centered'>Future</p>
                        <p className='has-text-centered is-size-5'>
                          I'd like to add more functionality to the app itself,
                          since the barebones approach was just to keep it
                          simple so I could finish the project on time. There
                          could be more info for the contact entries themselves
                          and a more detailed layout to reflect the new
                          information. Though I would not change much of the
                          styling since this was my first time playing with a
                          minimalist design.
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

export default ProjectThree;
