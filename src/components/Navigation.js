import React from "react";

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
                <a className='navbar-item'>
                  <h1 className='is-size-3'>SbK</h1>
                </a>
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
                  <a className='navbar-item is-active'>Home</a>
                  <a className='navbar-item'>About</a>
                  <a className='navbar-item'>Skills</a>
                  <a className='navbar-item'>Projects</a>
                  <a className='navbar-item'>Contact</a>
                  <span className='navbar-item'>
                    <a className='button is-info is-inverted'>
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
                  <a>About</a>
                </li>
                <li>
                  <a>Skills</a>
                </li>
                <li>
                  <a>Projects</a>
                </li>
                <li>
                  <a>Contact</a>
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
