import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = ({}) => {
  const [active, setActive] = useState(false);

  const toggleBurger = () => {
    var burger = document.querySelector(".burger");
    var menu = document.querySelector(".navbar-menu");
    burger.classList.toggle("is-active");
    menu.classList.toggle("is-active");
  };

  // const isActive = () => {
  //   document.getElementById("nav-toggle").addEventListener("click", toggleNav);
  //   function toggleNav() {
  //     var nav = document.getElementById("nav-menu");
  //     var className = nav.getAttribute("className");
  //     if (className == "nav-right nav-menu") {
  //       nav.className = "nav-right nav-menu is-active";
  //     } else {
  //       nav.className = "nav-right nav-menu";
  //     }
  //   }
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
      <section className='hero is-info is-bold is-medium'>
        <div className='hero-head'>
          <nav className='navbar'>
            <div className='container'>
              <div className='navbar-brand'>
                <Link to='/' className='navbar-item'>
                  <p className=' logo-text'>SbK</p>
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
              <div id='navbarMenuHeroB' className=''>
                <div className='navbar-end'>
                  <Link
                    to='/'
                    className='navbar-item navbar-menu is-active'
                    style={{ fontSize: "1.3em" }}
                  >
                    Home
                  </Link>
                  <Link
                    to='/about'
                    className='navbar-item'
                    style={{ fontSize: "1.3em" }}
                  >
                    About
                  </Link>
                  <Link
                    to='/skills'
                    className='navbar-item'
                    style={{ fontSize: "1.3em" }}
                  >
                    Skills
                  </Link>
                  <Link
                    to='/projects'
                    className='navbar-item'
                    style={{ fontSize: "1.5em" }}
                  >
                    Projects
                  </Link>
                  <Link
                    to='/contact'
                    className='navbar-item'
                    style={{ fontSize: "1.3em" }}
                  >
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
          <nav className='tabs is-boxed is-fullwidth nav-toggle'>
            <div className='container'>
              <ul>
                <li
                  className='is-active nav-menu'
                  style={{ fontSize: "1.5em" }}
                  // onClick={isActive}
                >
                  <Link to='/about'>About</Link>
                </li>
                <li
                  className='nav-menu'
                  style={{ fontSize: "1.5em" }}
                  // onClick={isActive}
                >
                  <Link to='/skills'>Skills</Link>
                </li>
                <li
                  className='nav-menu'
                  style={{ fontSize: "1.5em" }}
                  // onClick={isActive}
                >
                  <Link to='/projects'>Projects</Link>
                </li>
                <li
                  className='nav-menu'
                  style={{ fontSize: "1.5em" }}
                  // onClick={isActive}
                >
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
