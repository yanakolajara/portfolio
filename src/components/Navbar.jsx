import React from 'react';
import './Navbar.scss';

export default function Navbar() {
  return (
    <nav className='navbar container-glass'>
      <div className='portfolio-sections'>
        <a>Home</a>
        <a>More about me</a>
        <a>Projects in development</a>
        <a>Favorite resources</a>
      </div>
      <div className='contact-links'>
        <a>GitHub</a>
        <a>LinkedIn</a>
        <a>Blog</a>
        <a>Download CV</a>
      </div>
    </nav>
  );
}
