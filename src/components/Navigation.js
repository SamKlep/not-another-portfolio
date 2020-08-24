import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const toggleBurger = () => {
    var burger = document.querySelector(".burger");
    var menu = document.querySelector(".navbar-menu");
    burger.classList.toggle("is-active");
    menu.classList.toggle("is-active");
  };

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
            <p className='title'>Welcome</p>
            <p className='subtitle'>to Samuel's Portfolio</p>
          </div>
        </div>

        <div className='hero-foot'>
          <nav className='tabs is-boxed is-fullwidth'>
            <div className='container'>
              <ul>
                <li className='is-active'>
                  <Link to='/about'>About</Link>
                </li>
                <li>
                  <Link to='/skills'>Skills</Link>
                </li>
                <li>
                  <Link to='/projects'>Projects</Link>
                </li>
                <li>
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
