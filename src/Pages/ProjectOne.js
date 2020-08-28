import React from "react";
import ProjectBreadcrumb from "../components/ProjectBreadcrumb";

const ProjectOne = () => {
  return (
    <div>
      <ProjectBreadcrumb />
      <div className=''>
        <section class='hero is-medium is-light is-bold'>
          <div class='hero-body'>
            <div class='container'>
              <h1 class='title'>Crypto News Network</h1>
              <h2 class='subtitle'>
                Your Source for Up to The Minute Crypto Currency News
              </h2>

              <a href='https://evening-meadow-70637.herokuapp.com/'>
                <p className='is-size-5'>
                  https://evening-meadow-70637.herokuapp.com/
                </p>
              </a>
              <img
                className='project-image'
                src='/assets/images/laptop-1.jpg '
              />

              <section class='section'>
                <div class='container'>
                  <h2 class='subtitle'></h2>
                </div>
              </section>

              <div class='tile is-ancestor'>
                <div class='tile is-vertical is-8'>
                  <div class='tile'>
                    <div class='tile is-parent is-vertical'>
                      <article class='tile is-child box'>
                        <h5>
                          <strong>Technologies</strong>
                        </h5>{" "}
                        <p>
                          With this project I ventured out of my comfort zone
                          and learned how to make a full-stack application using
                          Python and Django. It makes a call to the
                          CryptoCompare API and displays the latest prices of
                          popular coins as well as the latest news articles.
                          Also using HTML and CSS as well.
                        </p>
                      </article>
                      <article class='tile is-child box'>
                        <h5>
                          <strong>Learned</strong>
                        </h5>{" "}
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quisque vehicula massa justo, vel aliquam lectus
                          suscipit vitae. Maecenas eros elit, interdum ut
                          dapibus nec, mattis vitae magna.
                        </p>
                      </article>
                    </div>
                    <div class='tile is-parent'>
                      <article class='tile is-child box'>
                        <h5>
                          <strong>Workflow</strong>
                        </h5>{" "}
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quisque vehicula massa justo, vel aliquam lectus
                          suscipit vitae. Maecenas eros elit, interdum ut
                          dapibus nec, mattis vitae magna.
                        </p>
                      </article>
                    </div>
                  </div>
                  <div class='tile is-parent'>
                    <article class='tile is-child box'>
                      <h5>
                        <strong>Different</strong>
                      </h5>{" "}
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quisque vehicula massa justo, vel aliquam lectus
                        suscipit vitae. Maecenas eros elit, interdum ut dapibus
                        nec, mattis vitae magna.
                      </p>
                    </article>
                  </div>
                </div>
                <div class='tile is-parent'>
                  <article class='tile is-child box'>
                    <h5>
                      <strong>Challenges</strong>
                    </h5>{" "}
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quisque vehicula massa justo, vel aliquam lectus suscipit
                      vitae. Maecenas eros elit, interdum ut dapibus nec, mattis
                      vitae magna.
                    </p>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectOne;
