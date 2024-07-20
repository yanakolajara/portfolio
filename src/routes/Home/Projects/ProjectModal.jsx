import React from 'react';
import './ProjectModal.scss';

export default function ProjectModal({ projectData }) {
  const project = require(`../../../data/projectsData.json`)[1];
  const projectImage = require(`../../../assets/images/${project['snapshot']}`);
  console.log(project);
  return (
    <div className='ProjectModal'>
      <article className='content container-glass'>
        <h1>{project.name}</h1>
        <div className='information'>
          <img
            className='snapshot'
            src={projectImage}
            alt={project.name}
            height={300}
          />
          <p className='description'>{project['description']}</p>
          <div className='tools'>
            <h2>Tools Used</h2>
            <ul>
              {project.tools.map((tool) => (
                <li className='tool'>{tool}</li>
              ))}
            </ul>
          </div>
          <div className='links'>
            <h2>Links</h2>
            <ul>
              {Object.entries(project.links).map(([key, value]) => (
                <li className='link'>
                  <a href={value} target='_blank' rel='noopener noreferrer'>
                    {key}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </div>
  );
}
