import React from "react";
import ProjectBreadcrumb from "../components/ProjectBreadcrumb";

const ProjectOne = () => {
  return (
    <div>
      <ProjectBreadcrumb />
      <div className=''>
        <section class='hero is-medium is-primary is-bold'>
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
                  <h2 class='subtitle'>
                    Made with Python, Django, HTML and CSS. Utilizes data from
                    the CryptoCompare API and displays the latest information of
                    the top performing coins and news articles.
                  </h2>
                </div>
              </section>

              <div class='tile is-ancestor'>
                <div class='tile is-vertical is-8'>
                  <div class='tile'>
                    <div class='tile is-parent is-vertical'>
                      <article class='tile is-child box'>
                        <h5>Title</h5>{" "}
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quisque vehicula massa justo, vel aliquam lectus
                          suscipit vitae. Maecenas eros elit, interdum ut
                          dapibus nec, mattis vitae magna.
                        </p>
                      </article>
                      <article class='tile is-child box'>
                        <h5>Title</h5>{" "}
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
                        <h5>Title</h5>{" "}
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
                      <h5>Title</h5>{" "}
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
                    <h5>Title</h5>{" "}
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
