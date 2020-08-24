import React from "react";

const ProjectOne = () => {
  return (
    <div>
      <section class='hero is-success is-fullheight'>
        <div class='hero-body'>
          <div class='container'>
            <h1 class='title'>Crypto News Network</h1>
            <h2 class='subtitle'>Python - Django</h2>
          </div>
        </div>
      </section>
      <div className='container project-container-one'>
        <figure class='image is-square'>
          <img src='https://bulma.io/images/placeholders/256x256.png ' />
        </figure>
        <section class='section'>
          <div class='container'>
            <h1 class='title'>Section</h1>
            <h2 class='subtitle'>
              A simple container to divide your page into{" "}
              <strong>sections</strong>, like the one you're currently reading
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque vehicula massa justo, vel aliquam lectus suscipit
                    vitae. Maecenas eros elit, interdum ut dapibus nec, mattis
                    vitae magna.
                  </p>
                </article>
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
          <div class='tile is-parent'>
            <article class='tile is-child box'>
              <h5>Title</h5>{" "}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                vehicula massa justo, vel aliquam lectus suscipit vitae.
                Maecenas eros elit, interdum ut dapibus nec, mattis vitae magna.
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectOne;
