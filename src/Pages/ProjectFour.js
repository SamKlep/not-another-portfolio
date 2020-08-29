import React from "react";
import ProjectBreadcrumb from "../components/ProjectBreadcrumb";

const ProjectFour = () => {
  return (
    <div>
      <ProjectBreadcrumb />
      <div className=''>
        <section class='hero is-medium is-light is-bold'>
          <div class='hero-body'>
            <div class='container'>
              <h1 className='title'>Project 4</h1>
              <h2 className='subtitle'>COVID-19 Tracker</h2>
              <a href='https://focused-bhaskara-a7850e.netlify.app/'>
                <p className='is-size-5'>
                  https://focused-bhaskara-a7850e.netlify.app/
                </p>
              </a>

              <img
                className='project-image'
                src='/assets/images/laptop-4.jpg '
              />
              <section className='section'>
                <div className='container'>
                  <h2 className='is-size-4'>
                    This front-end project was an exercise in API calling with
                    React and trying out ChartJS. The user is able to choose a
                    country from a dropdown menu and see the latest data on
                    COVID-19 infections, deaths and recoveries.
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
                          ReactJS, NodeJS, ChartJS, CSS, Git & Netlify.
                        </p>
                      </article>
                    </div>
                    <div className='tile is-parent'>
                      <article className='tile is-child box'>
                        <p className='title has-text-centered'>Learned</p>
                        <p className='has-text-centered is-size-5'>
                          How to make API calls with React Hooks and display
                          data with ChartJS.
                        </p>
                      </article>
                    </div>
                    <div className='tile is-parent'>
                      <article className='tile is-child box'>
                        <p className='title has-text-centered'>Challenges</p>
                        <p className='has-text-centered is-size-5'>
                          Learning the React/JSX way of looping through API
                          results, since it is not JavaSCript entirely.
                        </p>
                      </article>
                    </div>
                    <div className='tile is-parent'>
                      <article className='tile is-child box'>
                        <p className='title has-text-centered'>Future</p>
                        <p className='has-text-centered is-size-5'>
                          I would more content to the site itself like a news
                          section with related articles to COVID-19.
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

export default ProjectFour;
