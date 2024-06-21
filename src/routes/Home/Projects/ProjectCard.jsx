import React from 'react';
import './ProjectCard.scss';
import Description from './Description';
import Info from './Info';
import Links from './Links';
import Tools from './Tools';
import { useNavigate } from 'react-router-dom';

export default function ProjectCard({ data }) {
  const {
    name,
    route,
    snapshot,
    description,
    // variables,
    tools,
    links,
  } = data;
  const navigate = useNavigate();

  const projectSnapshot = require(`../../../assets/${
    snapshot || 'image-placeholder.jpg'
  }`);
  return (
    <div className='project-card container-glass'>
      <img
        src={projectSnapshot}
        alt='project snapshot'
        className='project-snapshot'
      />

      <p className='project-title'>{name}</p>
      <div className='project-details scroll-container'></div>
      <button onClick={() => navigate('/projects/' + route, { test: true })}>
        Learn more
      </button>
    </div>
  );
}
