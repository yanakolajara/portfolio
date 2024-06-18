import React from 'react';
import AboutMe from './AboutMe/AboutMe';
import Details from './Details/Details';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import './Home.scss';

export default function Home() {
  return (
    <main className='home'>
      <div className='about-me__container'>
        <AboutMe />
      </div>
      <div className='details__container'>
        <Details />
      </div>
      <div className='skills__container'>
        <Skills />
      </div>
      <div className='projects__container'>
        <Projects />
      </div>
    </main>
  );
}
