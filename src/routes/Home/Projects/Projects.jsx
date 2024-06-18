import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.scss';

export default function Projects() {
  const data = require('../../../data/projects.json');
  console.log(data);
  return (
    <div className='projects container-glass'>
      <h1 className='title'>Projects</h1>
      <button className='tag-selector'>Look for</button>
      <button className='sorting-selector'>Sort By</button>
      <input type='text' className='search-bar' id='' />
      <div className='projects-container container-deep'>
        {data.map((project) => (
          <ProjectCard data={project} />
        ))}
      </div>
    </div>
  );
}
