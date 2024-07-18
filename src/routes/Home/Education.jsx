import React from 'react';

export default function Education({ educationData }) {
  return (
    <div className='education scroll-container'>
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
  );
}
