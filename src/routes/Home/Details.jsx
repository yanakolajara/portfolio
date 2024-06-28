import React from 'react';
import Summary from './Details/Summary';
import Education from './Details/Education';
import JobCard from './Details/JobCard';
import Selector from '../../components/Selector';

export default function Details() {
  const [selected, setSelected] = React.useState('summary');
  const jobExperienceData = require('../../data/job-experience.json');
  return (
    <div className='details container-glass'>
      <Selector
        options={['summary', 'education', 'job experience']}
        selected={selected}
        setSelected={setSelected}
      />

      {selected === 'summary' && <Summary />}
      {selected === 'education' && <Education />}

      {selected === 'job experience' && (
        <div className='job-experience'>
          {jobExperienceData.map((job) => (
            <div>
              <JobCard data={job} />
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
