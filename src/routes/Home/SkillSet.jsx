import React from 'react';
import Selector from '../../components/Selector';

export default function SkillSet({ skillSetData }) {
  return (
    <section className='SkillSet'>
      {skillSetData.map((skill) => (
        <article className='SkillSet__card'>
          <img
            className='skill-icon'
            src={require(`../../assets/icons/${skill['icon-path']}`)}
            alt={skill.name}
          />
          <h1 className='skill-name'>{skill.name}</h1>
        </article>
      ))}
    </section>
  );
}
