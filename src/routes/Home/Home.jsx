import React from 'react';
import Introduction from './Introduction';
import Details from './Details/Details';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import './Home.scss';

export default function Home() {
  const profilePicture = require('../../assets/MyPicture.jpg');
  return (
    <main className='home'>
      <Introduction profilePicture={profilePicture} />
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
