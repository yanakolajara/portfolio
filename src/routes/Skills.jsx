import React from 'react';
import Selector from '../components/Selector';

export default function Skills() {
  const [selected, setSelected] = React.useState('All');
  const skillsData = require('../data/skills.json');

  return (
    <div className='skills container-glass'>
      <Selector
        options={['All', 'Languages', 'Frameworks', 'Tools', 'Other']}
        selected={selected}
        setSelected={setSelected}
      />

      <p>Last updated: 01/01/2022</p>
      <section className='scroll-container container-deep'>
        {skillsData.map((skill) => {
          if (selected === 'All' || selected === skill.type) {
            return (
              <article className='skill-card'>
                <h1 className='skill-name'>{skill.name}</h1>
                <img
                  className='skill-icon'
                  src={require(`../assets/icons/${skill['icon-path']}`)}
                />
              </article>
            );
          }
        })}
      </section>
    </div>
  );
}
