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
              <section class='section'>
                <div class='container'></div>
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

export default ProjectThree;
