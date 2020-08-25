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
