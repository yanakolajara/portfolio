import React from 'react';
import './Experience.scss';

export default function Experience({ jobExperienceData, educationData }) {
  const displayJobs = (data) => {
    return data.map((item) => {
      return (
        <div className='card container-glass'>
          <h3 className='card-title'>{item.position || item.name}</h3>
          <h3 className='card-subtitle'>{item.company || item.degree}</h3>
          <p className='card-date'>
            {item['start-date']} - {item['end-date']}
          </p>
          <p className='description'>{item.description}</p>
        </div>
      );
    });
  };
  return (
    <div className='experience'>
      <h2 className='title'>Experience</h2>
      <div className='container'>
        <div className='content jobs'>
          <h2 className='subtitle'>Jobs</h2>
          {displayJobs(jobExperienceData)}
        </div>
        <div className='content education'>
          <h2 className='subtitle'>Education</h2>
          {displayJobs(educationData)}
        </div>
      </div>
    </div>
  );
}
