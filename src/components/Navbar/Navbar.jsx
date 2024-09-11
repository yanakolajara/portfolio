import React from 'react';
import { FaSuitcase, FaTools, FaUser } from 'react-icons/fa';
import { MdOutlineWeb } from 'react-icons/md';
import YanakoCV from '../../assets/other/YanakoCV.pdf';
import NavbarOption from './NavbarOption';
import './Navbar.scss';

export default function Navbar() {
  // const [selected, setSelected] = React.useState('Intro');

  return (
    <nav className='container-glass-dark navbar'>
      <NavbarOption
        renderIcon={<FaUser className='icon' />}
        text='Intro'
        route='/'
        href={'#intro'}
      />
      <NavbarOption
        renderIcon={<FaTools className='icon' />}
        text='Skills'
        route='/'
        href={'#skill-set'}
      />

      <NavbarOption
        renderIcon={<MdOutlineWeb className='icon' />}
        text='Projects'
        route='/'
        href={'#projects'}
      />

      <div className='contact-links'>
        {/* <a
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
          </a> */}
        <a
          className='navbar-option'
          href={YanakoCV}
          target='_blank'
          rel='noopener noreferrer'
          download
        >
          <FaSuitcase className='icon' />
          <span className='text'>Download CV</span>
        </a>
      </div>
      {/* <a href='/about-me'>More about me</a>
          <a href='/favorite-resources'>Favorite resources</a>
          <a target='_blank' href='/'>
            Blog
          </a> */}
    </nav>
  );
}
