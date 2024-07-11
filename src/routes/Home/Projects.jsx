import React from 'react';

export default function Projects() {
  const data = require('../../data/projects.json');
  return (
    <div className='projects container-glass'>
      <h1 className='title'>Projects</h1>
      <button className='tag-selector'>Look for</button>
      <button className='sorting-selector'>Sort By</button>
      <input type='text' className='search-bar' id='' />
      <section className='projects-container container-deep'>
        {data.map((project) => {
          const projectSnapshot = require(`../../assets/images/${
            project['snapshot'] || 'image-placeholder.jpg'
          }`);
          console.log(project);
          return (
            <article className='project-card container-glass'>
              <img
                src={projectSnapshot}
                alt='project snapshot'
                className='project-snapshot'
              />

              <p className='project-title'>{project.name}</p>
              <div className='project-details scroll-container container-deep'>
                {project.description && (
                  <React.Fragment>
                    <h2>Description</h2>
                    <p className='project-description'>{project.description}</p>
                    <hr />
                  </React.Fragment>
                )}
                {project.tools && (
                  <div className='project-tools'>
                    <h2>Tools Used</h2>
                    <ul>
                      {project.tools.map((tool) => (
                        <li className='project-tool'>{tool}</li>
                      ))}
                    </ul>
                    <hr />
                  </div>
                )}
                {Object.keys(project.links).length && (
                  <ul className='project-links'>
                    {Object.entries(project.links).map(
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
            </article>
          );
        })}
      </section>
    </div>
  );
}
