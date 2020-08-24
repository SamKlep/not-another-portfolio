import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const toggleBurger = () => {
    var burger = document.querySelector(".burger");
    var menu = document.querySelector(".navbar-menu");
    burger.classList.toggle("is-active");
    menu.classList.toggle("is-active");
  };

  // const isActive = () => {
  //   var activeMenu = document.querySelector(".active-list");

  //   activeMenu.classList.toggle("is-active");
  // };

  setTimeout(function () {
    // start a delay
    var fade = document.getElementById("fade"); // get required element
    fade.style.opacity = 1; // set opacity for the element to 1
    var timerId = setInterval(function () {
      // start interval loop
      var opacity = fade.style.opacity; // get current opacity
      if (opacity === 0) {
        // check if its 0 yet
        clearInterval(timerId); // if so, exit from interval loop
      } else {
        fade.style.opacity = opacity - 0.05; // else remove 0.05 from opacity
      }
    }, 100); // run every 0.1 second
  }, 1500); // wait to run after 5 seconds

  return (
    <div>
      <section className='hero is-info is-large'>
        <div className='hero-head'>
          <nav className='navbar'>
            <div className='container'>
              <div className='navbar-brand'>
                <Link to='/' className='navbar-item'>
                  <h1 className='is-size-3'>SbK</h1>
                </Link>
                <span
                  className='navbar-burger burger'
                  data-target='navbarMenuHeroB'
                  onClick={toggleBurger}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id='navbarMenuHeroB' className='navbar-menu'>
                <div className='navbar-end'>
                  <Link to='/' className='navbar-item is-active'>
                    Home
                  </Link>
                  <Link to='/about' className='navbar-item'>
                    About
                  </Link>
                  <Link to='/skills' className='navbar-item'>
                    Skills
                  </Link>
                  <Link to='/projects' className='navbar-item'>
                    Projects
                  </Link>
                  <Link to='/contact' className='navbar-item'>
                    Contact
                  </Link>
                  <span className='navbar-item'>
                    <a
                      href='https://github.com/samklep'
                      className='button is-info is-inverted'
                    >
                      <span className='icon'>
                        <i className='fab fa-github'></i>
                      </span>
                      <span>GitHub</span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div className='hero-body'>
          <div className='container has-text-centered'>
            <p id='fade' className='title welcome-text'>
              Welcome
            </p>
          </div>
        </div>

        <div className='hero-foot'>
          <nav className='tabs is-boxed is-fullwidth'>
            <div className='container'>
              <ul>
                <li className='is-active'>
                  <Link to='/about'>About</Link>
                </li>
                <li className='active-list'>
                  <Link to='/skills'>Skills</Link>
                </li>
                <li className='active-list'>
                  <Link to='/projects'>Projects</Link>
                </li>
                <li className='active-list'>
                  <Link to='/contact'>Contact</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
};
export default Navigation;
