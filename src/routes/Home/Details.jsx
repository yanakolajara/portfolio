import React from 'react';
import Selector from '../../components/Selector';

export default function Details() {
  const [selected, setSelected] = React.useState('summary');
  const jobExperienceData = require('../../data/job-experience.json');
  const educationData = require('../../data/education.json');
  return (
    <div className='details container-glass'>
      <Selector
        options={['summary', 'education', 'job experience']}
        selected={selected}
        setSelected={setSelected}
      />

      {selected === 'summary' && (
        <div>
          <p>
            I am a full-stack developer at Pursuit, interested in creating new
            technologies to make everyone's life more comfortable. Pursuit is an
            intensive 12-month software engineering fellowship with a 9%
            acceptance rate. I am skilled in Postgres, Express.js, React.js,
            JavaScript, Java, Python, HTML, CSS, Node, Git, Algorithms, code
            reviews, and pair programming. I started my developer journey in
            2016 by learning basic HTML, CSS, JavaScript, and Arduino at a
            summer club. Since that, my passion for technology and programming
            has been growing exponentially. A fun fact about me that makes me an
            enthusiastic developer is that even if coding is part of my
            professional career, whenever I have free time, I still use it to
            code for fun instead of taking a break.
          </p>
        </div>
      )}
      {selected === 'education' && (
        <div className='education'>
          {educationData.map((education) => (
            <React.Fragment>
              <div className='education__card'>
                <div className='education__image'>
                  <img
                    src={require(`../../assets/images/${education['image']}`)}
                    alt={education.name}
                  />
                </div>
                <div className='education__details'>
                  <h1>{education.name}</h1>
                  <p>Degree type: {education.degree}</p>
                  <p>
                    {education['start-date']} - {education['end-date']}
                  </p>
                </div>
              </div>
              <hr />
            </React.Fragment>
          ))}
        </div>
      )}

      {selected === 'job experience' && (
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
      )}
    </div>
  );
}
