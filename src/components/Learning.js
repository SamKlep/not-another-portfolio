import React from "react";
import TabsLearning from "./TabsLearning";
import SkillsLearning from "./SkillsLearning";

export const Learning = () => {
  return (
    <div>
      <SkillsLearning />
      <section classNameName='hero is-dark is-bold'>
        <div classNameName='hero-body'>
          <div classNameName='container'></div>
        </div>
      </section>
      <section classNameName='section is-medium skills-container'>
        <div classNameName='container'></div>
      </section>
      <TabsLearning />
      <br />

      <div>
        <div className='container skill-card'>
          <div className='tile is-ancestor'>
            <div className='tile is-parent'>
              <article className='tile is-child box'>
                <p className='title has-text-centered'>React VR</p>

                <p className='has-text-centered is-size-1'>
                  <i className='fab fa-react'></i>
                </p>
              </article>
            </div>
            <div className='tile is-parent'>
              <article className='tile is-child box'>
                <p className='title has-text-centered'>Unity</p>
                <p className='has-text-centered is-size-1'>
                  <span
                    className='iconify'
                    data-icon='cib:unity'
                    data-inline='false'
                  ></span>
                </p>
              </article>
            </div>
            <div className='tile is-parent'>
              <article className='tile is-child box'>
                <p className='title has-text-centered'>Python</p>
                <p className='has-text-centered is-size-1'>
                  <i className='fab fa-python'></i>
                </p>
              </article>
            </div>
            <div className='tile is-parent'>
              <article className='tile is-child box'>
                <p className='title has-text-centered'>Django</p>
                <p className='has-text-centered is-size-1'>
                  <span
                    className='iconify'
                    data-icon='cib:django'
                    data-inline='false'
                  ></span>
                </p>
              </article>
            </div>
          </div>
          <div className='tile is-ancestor'>
            <div className='tile is-parent'>
              <article className='tile is-child box'>
                <p className='title has-text-centered'>Deno</p>

                <p className='has-text-centered is-size-1'>
                  <span
                    className='iconify'
                    data-icon='cib:deno'
                    data-inline='false'
                  ></span>
                </p>
              </article>
            </div>
            <div className='tile is-parent'>
              <article className='tile is-child box'>
                <p className='title has-text-centered'>Raspberry Pi</p>
                <p className='has-text-centered is-size-1'>
                  <span
                    className='iconify'
                    data-icon='cib:raspberry-pi'
                    data-inline='false'
                  ></span>
                </p>
              </article>
            </div>
            <div className='tile is-parent'>
              <article className='tile is-child box'>
                <p className='title has-text-centered'>Arduino</p>
                <p className='has-text-centered is-size-1'>
                  <span
                    className='iconify'
                    data-icon='cib:arduino'
                    data-inline='false'
                  ></span>
                </p>
              </article>
            </div>
            <div className='tile is-parent'>
              <article className='tile is-child box'>
                <p className='title has-text-centered'>Gatsby</p>
                <p className='has-text-centered is-size-1'>
                  <span
                    className='iconify'
                    data-icon='cib:gatsby'
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin ornare magna eros, eu pellentesque tortor vestibulum
                    ut.
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin ornare magna eros, eu pellentesque tortor vestibulum
                    ut. Maecenas non massa sem. Etiam finibus odio quis feugiat
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin ornare magna eros, eu pellentesque tortor vestibulum
                    ut.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Learning;
