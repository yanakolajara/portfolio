import React from 'react';

export default function ProjectCard({
  image,
  name,
  description,
  tools,
  links,
}) {
  return (
    <article className='project-card container-glass'>
      <img src={image} alt='project snapshot' className='project-snapshot' />

      <p className='project-title'>{name}</p>
      <div className='project-details scroll-container container-deep'>
        {description && (
          <React.Fragment>
            <h2>Description</h2>
            <p className='project-description'>{description}</p>
            <hr />
          </React.Fragment>
        )}
        {tools && (
          <div className='project-tools'>
            <h2>Tools Used</h2>
            <ul>
              {tools.map((tool) => (
                <li className='project-tool'>{tool}</li>
              ))}
            </ul>
            <hr />
          </div>
        )}
        {Object.keys(links).length && (
          <ul className='project-links'>
            {Object.entries(links).map(
              ([key, value]) =>
                value && (
                  <li>
                    <p>
                      {key}:{' '}
                      <a
                        href={value}
                        target='_blank'
                        rel='noreferrer'
                        className='project-link'
                      >
                        {value}
                      </a>
                    </p>
                  </li>
                )
            )}
          </ul>
        )}
      </div>
      <button>Learn more</button>
    </article>
  );
}
