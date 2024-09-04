import React from 'react';
import './Introduction.scss';

export default function Introduction({ profilePicture }) {
  return (
    <section className='introduction'>
      <div className='title-container'>
        <h1 className='name'>Yanako Lajara</h1>
        <h2 className='position'>Full-Stack Web Developer</h2>

        <p className='summary'>
          I am a full-stack developer at Pursuit, interested in creating new
          technologies to make everyone's life more comfortable. Pursuit is an
          intensive 12-month software engineering fellowship with a 9%
          acceptance rate. I am skilled in Postgres, Express.js, React.js,
          JavaScript, Java, Python, HTML, CSS, Node, Git, Algorithms, code
          reviews, and pair programming. I started my developer journey in 2016
          by learning basic HTML, CSS, JavaScript, and Arduino at a summer club.
          Since that, my passion for technology and programming has been growing
          exponentially. A fun fact about me that makes me an enthusiastic
          developer is that even if coding is part of my professional career,
          whenever I have free time, I still use it to code for fun instead of
          taking a break.
        </p>
      </div>
      <div className='picture-container'>
        <img
          className='profile-picture'
          src={profilePicture}
          alt='profile-pic'
        />
      </div>
    </section>
  );
}
