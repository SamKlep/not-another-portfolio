import React from "react";

const Contact = () => {
  return (
    <div>
      <section className='hero is-dark is-bold'>
        <div className='hero-body'>
          <div className='container'>
            <h1 className='title has-text-centered is-size-1'>Contact</h1>
          </div>
        </div>
      </section>
      <section className='section is-medium'>
        <div className='container'>
          <h2 className='subtitle has-text-centered'>Lets get in touch.</h2>
          <br />
          <br />
          <p className='text-center'>
            <i class='fas fa-envelope'></i> :
            <a
              href='mailto:samklepdev@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              {" "}
              samklepdev@gmail.com
            </a>
          </p>
          <p className='text-center'>
            <i class='fas fa-phone'></i> :
            <a href='tel:7133769541' target='_blank' rel='noopener noreferrer'>
              {" "}
              713-376-9541
            </a>
          </p>
          <p className='text-center'>
            <i class='fab fa-github'></i> :
            <a
              href='https://www.github.com/samklep'
              target='_blank'
              rel='noopener noreferrer'
            >
              {" "}
              github.com/samklep
            </a>
          </p>
          <p className='text-center'>
            <i class='fab fa-linkedin'></i>:
            <a
              href='https://www.linkedin.com/in/samuel-klepper-0435b5193/'
              target='_blank'
              rel='noopener noreferrer'
            >
              {" "}
              linkedin.com/in/samuel-klepper
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};
export default Contact;
