import React from 'react';
import './Navbar.scss';

export default function Navbar() {
  return (
    <div className='navbar-container'>
      <nav className='container-glass navbar'>
        <div className='portfolio-sections'>
          <a href='/'>Home</a>
          <a href='/about-me'>More about me</a>
          <a href='/favorite-resources'>Favorite resources</a>
        </div>
        <div className='contact-links'>
          <a href='/'>GitHub</a>
          <a href='/'>LinkedIn</a>
          <a href='/'>Blog</a>
          <a href='/'>Download CV</a>
        </div>
      </nav>
    </div>
  );
}
