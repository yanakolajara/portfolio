import React from 'react';
import { getLinkProperties } from '../../../utils/data.utils.js';
import './ProjectModal.scss';

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
              {Object.entries(project.links).map(([key, value]) => {
                if (key === 'other') return null;
                const { name, buttonStyle, icon } = getLinkProperties(key);
                return (
                  <a
                    className='link'
                    href={value}
                    target='_blank'
                    rel='noopener noreferrer'
                    style={buttonStyle}
                  >
                    <i className='link__icon'>{icon}</i>
                    <p className='link__name'>{name}</p>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
