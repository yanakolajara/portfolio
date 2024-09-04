import React from 'react';
import './SkillSet.scss';

export default function SkillSet({ skillSetData }) {
  const showSkills = (type = 'other') => {
    const skills = skillSetData.filter((skill) => skill.type === type);
    const skillCards = skills.map((skill) => {
      return (
        <article className='skill-card'>
          <img
            className='icon'
            src={require(`../../../assets/icons/${skill['icon-path']}`)}
            alt={skill.name}
          />
          <p className='name'>{skill.name}</p>
        </article>
      );
    });
    return skillCards;
  };
  return (
    <section className='skill-set'>
      <h2 className='title'>Skill Set</h2>
      <div className='container'>
        <div className='skill-type'>
          <h3>Languages</h3>
          {showSkills('Languages')}
        </div>
        <div className='skill-type'>
          <h3>Front-end</h3>
          {showSkills('Front-end')}
        </div>

        <div className='skill-type'>
          <h3>Back-end</h3>
          {showSkills('Back-end')}
        </div>
        <div className='skill-type'>
          <h3>Other</h3>
          {showSkills('Other')}
        </div>
      </div>
    </section>
  );
}
