import React from 'react';
import './ProjectModal.scss';
import { getLinkName } from '../../../utils/dataUtils';
import { HiStatusOnline } from 'react-icons/hi';

export default function ProjectModal({ projectData }) {
  const project = require(`../../../data/projectsData.json`)[1];
  const projectImage = require(`../../../assets/images/${project['snapshot']}`);
  console.log(project);
  return (
    <div className='ProjectModal'>
      <article className='content container-glass'>
        <h1 className='title'>{project.name}</h1>
        <div className='information'>
          <img
            className='snapshot'
            src={projectImage}
            alt={project.name}
            height={300}
          />
          <p className='description'>{project['description']}</p>
          <div className='tools'>
            <h2 className='title'>Tools Used</h2>
            <ul>
              {project.tools.map((tool) => (
                <li className='tool'>{tool}</li>
              ))}
            </ul>
          </div>
          <div className='links'>
            <h2 className='title'>Links</h2>
            <div className='links__container'>
              {Object.entries(project.links).map(([key, value]) => (
                <a
                  className='link'
                  href={value}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {getLinkName(key)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
