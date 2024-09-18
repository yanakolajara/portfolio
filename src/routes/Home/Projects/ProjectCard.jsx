import React from 'react';
import './ProjectCard.scss';

function ProjectCard({ project, openModal }) {
  const [selector, setSelector] = React.useState('description');
  const image = project['logo']
    ? require(`../../../assets/images/${project['logo']}`)
    : null;

  return (
    <article className='card container-glass'>
      {image && (
        <div className='card__logo'>
          <img src={image} alt='project snapshot' className='card__logo__img' />
        </div>
      )}
      <div className='card__content'>
        <div>
          <h3 className='card__title'>{project.name}</h3>
          <p className='card__description'>{project.description}</p>
        </div>
        <div className='section-selector'>
          <button
            className={`option ${selector === 'description' && 'selected'}`}
          >
            Description
          </button>
          <button className={`option ${selector === 'details' && 'selected'}`}>
            Details
          </button>
          <button className={`option ${selector === 'option' && 'selected'}`}>
            Links
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
