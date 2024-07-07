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
              <div className='project-details scroll-container'></div>
              {/* <button
              onClick={() => navigate('/projects/' + route, { test: true })}
            >
              Learn more
            </button> */}
            </article>
          );
        })}
      </section>
    </div>
  );
}
