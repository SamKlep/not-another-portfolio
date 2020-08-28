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
                          <strong> Python</strong> and <strong>Django</strong>.
                        </p>
                        <p>
                          It utilizes the <strong>CryptoCompare API</strong> and
                          displays the latest prices of popular coins as well as
                          the latest news articles. Also using{" "}
                          <strong>HTML</strong> and <strong>CSS</strong> as
                          well.
                        </p>
                      </article>
                      <article class='tile is-child box'>
                        <h5>
                          <strong>Workflow</strong>
                        </h5>{" "}
                        <p>
                          Since I was wokring with a new technology, there were
                          a lot of new concepts to me. I had never heard of a
                          virtual environment, how to activate one or python
                          dictionaries. But soon after completing the official
                          Django tutorial from the website, I understood enough
                          of the fundamentals to get up and going.
                        </p>
                      </article>
                    </div>
                    <div class='tile is-parent'>
                      <article class='tile is-child box'>
                        <h5>
                          <strong>Learned</strong>
                        </h5>{" "}
                        <p>
                          Since I primarily work in Javascript, I wanted to see
                          what Django was all about. To say the least, there was
                          a learning curve in which I had to spend many hours
                          learning about the fundamentals of Python and creating
                          a virtual environment. Since I was falimiar with NPM
                          already, it was easy to adapt to PIP to install
                          packages.
                        </p>
                        <p>
                          The syntax was a bit new to me, so I became quite
                          familiar with the console's error messages and Google.
                          The file structure of the application was interesting
                          too, how one would create numerous apps within the
                          whole application itself.
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
