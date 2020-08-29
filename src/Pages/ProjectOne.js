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
              <h1 className='title'>Crypto News Network</h1>
              <h2 className='subtitle'>
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

              <section className='section'>
                <div className='container'>
                  <h2 className='subtitle'></h2>
                </div>
              </section>

              <div className='tile is-ancestor'>
                <div className='tile is-vertical is-8'>
                  <div className='tile'>
                    <div className='tile is-parent is-vertical'>
                      <article className='tile is-child box'>
                        <h5>
                          <strong>Technologies</strong>
                        </h5>{" "}
                        <p>
                          With this project I ventured out of my comfort zone
                          and learned how to make a front-end application using
                          <strong> Python</strong> and <strong>Django</strong>.
                        </p>
                        <p>
                          It utilizes the <strong>CryptoCompare API</strong> and
                          displays the latest prices of popular coins as well as
                          the latest news articles. Also using{" "}
                          <strong>HTML</strong>, <strong>CSS</strong> and{" "}
                          <strong>Bootstrap</strong> as well.
                        </p>
                      </article>
                      <article className='tile is-child box'>
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
                        <p>
                          Having a general idea of the functionality I wanted, I
                          just had to plan out the wireframe and translate it
                          into code.
                        </p>
                      </article>
                    </div>
                    <div className='tile is-parent'>
                      <article className='tile is-child box project-vcenter-text'>
                        <h5>
                          <strong>Learned</strong>
                        </h5>{" "}
                        <p className=''>
                          Since I primarily work in Javascript, I wanted to see
                          what Django was all about. To say the least, there was
                          a learning curve in which I had to spend many hours
                          learning about the fundamentals of Python and creating
                          a virtual environment. Since I was falimiar with NPM
                          already, it was easy to adapt to PIP to install
                          packages.
                          <br />
                          <br />
                          The syntax was a bit new to me, so I became quite
                          familiar with the console's error messages and Google.
                          The file structure of the application was interesting
                          too, how one would create numerous apps within the
                          whole application itself. There were more features out
                          of the box that I thought were neat, like an admin
                          backend that makes it easy to migrate data to the
                          database, though I did not use on this project.
                        </p>
                      </article>
                    </div>
                  </div>
                  <div className='tile is-parent'>
                    <article className='tile is-child box'>
                      <h5>
                        <strong>Different</strong>
                      </h5>{" "}
                      <p>
                        If I could do anything different, I'd probably just
                        expand upon the initial idea. Add more features such as
                        regular non-crypto news section and probably more CSS
                        styling.
                      </p>
                    </article>
                  </div>
                </div>
                <div className='tile is-parent'>
                  <article className='tile is-child box project-vcenter-text'>
                    <h5>
                      <strong>Challenges</strong>
                    </h5>{" "}
                    <p>
                      Naturally, I faced some challenges along the way. Though
                      some of the syntax reminded me of EJS, this was clearly
                      not Javascript. Using the manage.py file to run the server
                      and migrate data was something new to get used to. I
                      learned pretty quickly that Python was very sensitive to
                      spacing and even an extra one somewhere in the code could
                      cause a compiling error.
                    </p>
                    <p>
                      When it came time to deploy, that was another set of
                      issues. Luckily, the whole experience gave me a lot of
                      practice researching specific problems and I was able to
                      get through the process successfully.
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
