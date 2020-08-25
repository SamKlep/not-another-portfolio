import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const toggleBurger = () => {
    var burger = document.querySelector(".burger");
    var menu = document.querySelector(".navbar-menu");
    burger.classList.toggle("is-active");
    menu.classList.toggle("is-active");
  };
  return (
    <div>
      <nav className='navbar' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
          <Link to='/' className='navbar-item'>
            <p className=' logo-text'>SbK</p>
          </Link>

          <a
            role='button'
            className='navbar-burger burger'
            aria-label='menu'
            aria-expanded='false'
            data-target='navbarBasicExample'
            onClick={toggleBurger}
          >
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </a>
        </div>

        <div id='navbarBasicExample' className='navbar-menu'>
          <div className='navbar-start'>
            <a className='navbar-item'>Home</a>

            <a className='navbar-item'>About</a>

            <div className='navbar-item has-dropdown is-hoverable'>
              <a className='navbar-link'>More</a>

              <div className='navbar-dropdown'>
                <a className='navbar-item'>About</a>
                <a className='navbar-item'>Jobs</a>
                <a className='navbar-item'>Contact</a>
                <hr className='navbar-divider' />
                <a className='navbar-item'>Report an issue</a>
              </div>
            </div>
          </div>

          <div className='navbar-end'>
            <span className='navbar-item'>
              <a href='https://github.com/samklep' className='button is-info'>
                <span className='icon'>
                  <i className='fab fa-github'></i>
                </span>
                <span>GitHub</span>
              </a>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
