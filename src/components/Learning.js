import React from "react";
import TabsLearning from "./TabsLearning";

export const Learning = () => {
  return (
    <div>
      <section className='hero is-dark is-bold'>
        <div className='hero-body'>
          <div className='container'>
            <h1 className='title has-text-centered is-size-1'>Skills</h1>
            <h2 className='subtitle'></h2>
          </div>
        </div>
      </section>
      <section className='section is-medium skills-container'>
        <div className='container'>
          <h1 className='title'>Learning</h1>
          <h2 className='subtitle'>Here's what I' currently learning.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            tempus sapien eget justo lacinia bibendum. Quisque non imperdiet
            lectus. Pellentesque at tempor diam, a ultrices magna. Duis a purus
            tincidunt, interdum lorem vel, convallis nisl. Proin mattis eu ante
            quis sodales. Pellentesque non convallis quam, sed commodo odio.
            Morbi mauris ex, ultrices sed metus sit amet, hendrerit eleifend
            erat. Morbi elit dolor, iaculis nec aliquam nec, laoreet vel tortor.
            Aenean et nulla urna. Quisque mollis justo arcu, vitae porta metus
            tempus at. Phasellus gravida mi lorem, nec auctor diam vehicula id.
            Donec rhoncus sapien nec erat consequat, sit amet condimentum orci
            congue. Sed felis tortor, malesuada placerat facilisis vel, aliquam
            sit amet nisl. Integer at pellentesque sapien. Etiam dictum augue
            vel convallis viverra.
          </p>
        </div>
      </section>
      <TabsLearning />
      <br />
      <div className='container'>
        <div className='tile is-ancestor'>
          <div className='tile is-4 is-vertical is-parent'>
            <div id='learning' className='tile is-child box tabcontent'>
              <p className='title'>One</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                ornare magna eros, eu pellentesque tortor vestibulum ut.
                Maecenas non massa sem. Etiam finibus odio quis feugiat
                facilisis.
              </p>
            </div>
            <div className='tile is-child box'>
              <p className='title'>Two</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                ornare magna eros, eu pellentesque tortor vestibulum ut.
                Maecenas non massa sem. Etiam finibus odio quis feugiat
                facilisis.
              </p>
            </div>
          </div>
          <div className='tile is-parent'>
            <div className='tile is-child box'>
              <p className='title'>Three</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                semper diam at erat pulvinar, at pulvinar felis blandit.
                Vestibulum volutpat tellus diam, consequat gravida libero
                rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc
                dui porta orci, quis semper odio felis ut quam.
              </p>
              <p>
                Suspendisse varius ligula in molestie lacinia. Maecenas varius
                eget ligula a sagittis. Pellentesque interdum, nisl nec interdum
                maximus, augue diam porttitor lorem, et sollicitudin felis neque
                sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus
                felis hendrerit sit amet. Aenean vitae gravida diam, finibus
                dignissim turpis. Sed eget varius ligula, at volutpat tortor.
              </p>
              <p>
                Integer sollicitudin, tortor a mattis commodo, velit urna
                rhoncus erat, vitae congue lectus dolor consequat libero. Donec
                leo ligula, maximus et pellentesque sed, gravida a metus. Cras
                ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis
                faucibus libero. Quisque non semper leo.
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Learning;
