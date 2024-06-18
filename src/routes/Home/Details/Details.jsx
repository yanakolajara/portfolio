import React from 'react';
import Summary from './Summary';
import Education from './Education';
import JobExperience from './JobExperience';
import './Details.scss';

export default function Details() {
  const [selected, setSelected] = React.useState('summary');
  return (
    <div className='details container-glass'>
      <div className='selector'>
        <button
          className={selected === 'summary' && 'active'}
          onClick={() => setSelected('summary')}
        >
          summary
        </button>
        <button
          className={selected === 'education' && 'active'}
          onClick={() => setSelected('education')}
        >
          education
        </button>
        <button
          className={selected === 'job experience' && 'active'}
          onClick={() => setSelected('job experience')}
        >
          job experience
        </button>
      </div>
      <div className='container-deep'>
        {selected === 'summary' && <Summary />}
        {selected === 'education' && <Education />}
        {selected === 'job experience' && <JobExperience />}
      </div>
    </div>
  );
}
