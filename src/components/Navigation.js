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

          <button
            className='navbar-burger burger'
            aria-label='menu'
            aria-expanded='false'
            data-target='navbarBasicExample'
            onClick={toggleBurger}
            style={{ border: "none", borderRadius: "15px" }}
          >
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </button>
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
              style={{ fontSize: "1.3em" }}
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
              <a
                href='https://github.com/samklep'
                className='button is-info'
                target='_blank'
                rel='noopener noreferrer'
              >
                <span className='icon'>
                  <i className='fab fa-github'></i>
                </span>
                <span>GitHub</span>
              </a>
            </span>
            <span className='navbar-item'>
              <a
                href='mailto:samklepdev@gmail.com'
                className='button is-info'
                target='_blank'
                rel='noopener noreferrer'
              >
                <span className='icon'>
                  <span
                    className='iconify'
                    data-icon='mdi:gmail'
                    data-inline='false'
                  ></span>
                </span>
                <span>Gmail</span>
              </a>
            </span>
            <span className='navbar-item'>
              <a
                href='/assets/images/S.KlepperResume.pdf'
                className='button is-info'
                target='_blank'
                rel='noopener noreferrer'
              >
                <span className='icon'>
                  <span
                    className='iconify'
                    data-icon='ant-design:paper-clip-outlined'
                    data-inline='false'
                  ></span>
                </span>
                <span>Resume</span>
              </a>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
