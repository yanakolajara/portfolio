import React from 'react';
import YanakoCV from '../assets/other/YanakoCV.pdf';
import './Navbar.scss';

export default function Navbar() {
  return (
    <div className='navbar-container'>
      <nav className='container-glass navbar'>
        <div className='portfolio-sections'>
          <a href='/'>Home</a>
          {/* <a href='/about-me'>More about me</a> */}
          {/* <a href='/favorite-resources'>Favorite resources</a> */}
        </div>
        <div className='contact-links'>
          <a
            target='_blank'
            href='https://github.com/yanakolajara'
            rel='noopener noreferrer'
          >
            GitHub
          </a>
          <a
            target='_blank'
            href='https://www.linkedin.com/in/yanakolajara/'
            rel='noopener noreferrer'
          >
            LinkedIn
          </a>
          {/* <a target='_blank' href='/'>
            Blog
          </a> */}
          <a href={YanakoCV} target='_blank' rel='noopener noreferrer' download>
            Download CV
          </a>
        </div>
      </nav>
    </div>
  );
}
