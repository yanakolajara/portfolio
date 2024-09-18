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
        {selector === 'description' && (
          <div className='card__description'>
            <h3 className='card__title'>{project.name}</h3>
            <p className='card__description__content'>{project.description}</p>
          </div>
        )}
        {selector === 'details' && <div className='card__details'></div>}
        {selector === 'links' && (
          <div className='card__linkss'>
            <ul>
              <li>
                <a
                  href={project.links.live}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Live
                </a>
              </li>
              <li>
                <a
                  href={project.links.frontEndRepo}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Front End Repo
                </a>
              </li>
              <li>
                <a
                  href={project.links.backEndRepo}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Back End Repo
                </a>
              </li>
            </ul>
          </div>
        )}
        <div className='section-selector'>
          <button
            className={`option ${selector === 'description' && 'selected'}`}
            onClick={() => setSelector('description')}
          >
            Description
          </button>
          <button
            className={`option ${selector === 'details' && 'selected'}`}
            onClick={() => setSelector('details')}
          >
            Details
          </button>
          <button
            className={`option ${selector === 'links' && 'selected'}`}
            onClick={() => setSelector('links')}
          >
            Links
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
