import React from "react";

const WhatIKnow = () => {
  return (
    <div>
      <div className='container skill-card'>
        <div className='tile is-ancestor'>
          <div className='tile is-parent'>
            <article className='tile is-child box'>
              <p className='title has-text-centered'>Node</p>
              <p className='has-text-centered'>
                <i className='fab fa-node-js has-text-centered is-size-1'></i>
              </p>
            </article>
          </div>
          <div className='tile is-parent'>
            <article className='tile is-child box'>
              <p className='title has-text-centered'>HTML</p>
              <p className='has-text-centered is-size-1'>
                <i className='fab fa-html5'></i>
              </p>
            </article>
          </div>
          <div className='tile is-parent'>
            <article className='tile is-child box'>
              <p className='title has-text-centered'>CSS</p>
              <p className='has-text-centered is-size-1'>
                <i className='fab fa-css3-alt'></i>
              </p>
            </article>
          </div>
          <div className='tile is-parent'>
            <article className='tile is-child box'>
              <p className='title has-text-centered'>Express</p>
              <p className='has-text-centered is-size-1'>
                <i className='fas fa-server'></i>
              </p>
            </article>
          </div>
        </div>
        <div className='tile is-ancestor'>
          <div className='tile is-parent'>
            <article className='tile is-child box'>
              <p className='title has-text-centered'>MongoDB</p>

              <p className='has-text-centered is-size-1'>
                <i className='fas fa-database'></i>
              </p>
            </article>
          </div>
          <div className='tile is-parent'>
            <article className='tile is-child box'>
              <p className='title has-text-centered'>PostgreSQL</p>
              <p className='has-text-centered is-size-1'>
                <i className='fas fa-database'></i>
              </p>
            </article>
          </div>
          <div className='tile is-parent'>
            <article className='tile is-child box'>
              <p className='title has-text-centered'>Sequelize</p>
              <p className='has-text-centered is-size-1'>
                <i className='fas fa-database'></i>
              </p>
            </article>
          </div>
          <div className='tile is-parent'>
            <article className='tile is-child box'>
              <p className='title has-text-centered'>React</p>
              <p className='has-text-centered is-size-1'>
                <i class='fab fa-react'></i>
              </p>
            </article>
          </div>
        </div>
        <div className='tile is-ancestor'>
          <div className='tile is-parent'>
            <article className='tile is-child box'>
              <p className='title has-text-centered'>Redux</p>

              <p className='has-text-centered is-size-1'>
                <span
                  className='iconify'
                  data-icon='simple-icons:redux'
                  data-inline='false'
                ></span>
              </p>
            </article>
          </div>
          <div className='tile is-parent'>
            <article className='tile is-child box'>
              <p className='title has-text-centered'>GitHub</p>
              <p className='has-text-centered is-size-1'>
                <i className='fab fa-github'></i>
              </p>
            </article>
          </div>
          <div className='tile is-parent'>
            <article className='tile is-child box'>
              <p className='title has-text-centered'>Heroku</p>
              <p className='has-text-centered is-size-1'>
                <span
                  className='iconify'
                  data-icon='cib:heroku'
                  data-inline='false'
                ></span>
              </p>
            </article>
          </div>
          <div className='tile is-parent'>
            <article className='tile is-child box'>
              <p className='title  has-text-centered'>Netlify</p>
              <p className='has-text-centered is-size-1'>
                <span
                  className='iconify'
                  data-icon='cib:netlify'
                  data-inline='false'
                ></span>
              </p>
            </article>
          </div>
        </div>

        <div className='tile is-ancestor'>
          <div className='tile is-parent'>
            <article className='tile is-child box'>
              <p className='title'>Twelve</p>
              <p className='subtitle'>Subtitle</p>
              <div className='content'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  ornare magna eros, eu pellentesque tortor vestibulum ut.
                </p>
              </div>
            </article>
          </div>
          <div className='tile is-parent is-6'>
            <article className='tile is-child box'>
              <p className='title'>Thirteen</p>
              <p className='subtitle'>Subtitle</p>
              <div className='content'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  ornare magna eros, eu pellentesque tortor vestibulum ut.
                  Maecenas non massa sem. Etiam finibus odio quis feugiat
                  facilisis.
                </p>
              </div>
            </article>
          </div>
          <div className='tile is-parent'>
            <article className='tile is-child box'>
              <p className='title'>Fourteen</p>
              <p className='subtitle'>Subtitle</p>
              <div className='content'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  ornare magna eros, eu pellentesque tortor vestibulum ut.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIKnow;
