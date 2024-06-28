import React from 'react';

export default function Introduction({ profilePicture }) {
  return (
    <div className='introduction container-glass'>
      <div className='profile-picture'>
        <img
          src={profilePicture}
          alt='profile-pic'
          className='profile-picture__img'
        />
      </div>
      <div className='introduction-box'>
        <p className='name'>Yanako Lajara</p>
        <p className='title'>Full-Stack Web Developer</p>
      </div>

      <div className='personal-info'>
        <p>Age: 20 years old</p>
        <p>Location: Ridgefield, NJ</p>
        <p>Pronouns: he/him</p>
      </div>
    </div>
  );
}
