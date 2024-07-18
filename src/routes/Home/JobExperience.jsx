import React from 'react';

export default function JobExperience({ jobExperienceData }) {
  return (
    <div className='job-experience'>
      {jobExperienceData.map((job) => (
        <div>
          <p>{job.company}</p>
          <p>{job.title}</p>
          <p>
            {job.startDate} - {job.endDate}
          </p>
          <p>{job.description}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
