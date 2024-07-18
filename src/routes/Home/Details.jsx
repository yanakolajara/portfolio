import React from 'react';
import Selector from '../../components/Selector';

export default function Details({ children, renderSelector }) {
  const [selected, setSelected] = React.useState('Skill Set');
  // const jobExperienceData = require('../../data/job-experience.json');
  // const educationData = require('../../data/education.json');
  return (
    <div className='details container-glass'>
      {renderSelector({
        options: ['Skill Set', 'Education', 'Job Experience'],
        selected,
        setSelected,
      })}
      <div className='container-deep scroll-container'>
        {selected === 'Skill Set' && children[0]}
        {selected === 'Education' && children[1]}
        {selected === 'Job Experience' && children[2]}
      </div>
    </div>
  );
}
