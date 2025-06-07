import React from 'react';
import './SkillSet.scss';

function SkillSet({ skillSetData }) {
  const showSkills = (type = 'other') => {
    const skills = skillSetData.filter((skill) => skill.type === type);
    const skillCards = skills.map((skill, index) => {
      return (
        <article key={index} className='skill-card'>
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
    <section id='skill-set' className='skill-set'>
      <h2 className='title section-title'>Skill Set</h2>
      <div className='container'>
        <div className='skill-type'>
          <h3>Languages</h3>
          <div className='skills-container'>
            {showSkills('Languages')}
          </div>
        </div>
        <div className='skill-type'>
          <h3>Front-end</h3>
          <div className='skills-container'>
            {showSkills('Front-end')}
          </div>
        </div>
        <div className='skill-type'>
          <h3>Back-end</h3>
          <div className='skills-container'>
            {showSkills('Back-end')}
          </div>
        </div>
        <div className='skill-type'>
          <h3>Other</h3>
          <div className='skills-container'>
            {showSkills('Other')}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillSet;