import React from 'react';
import Introduction from './Introduction';
import Details from './Details';
import Skills from './Skills';
import Projects from './Projects';
import './Home.scss';

export default function Home() {
  const profilePicture = require('../../assets/images/yanako-picture.jpg');
  return (
    <main className='home'>
      <Introduction profilePicture={profilePicture} />
      <Details />
      <Skills />
      <Projects />
    </main>
  );
}
