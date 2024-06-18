import React from 'react';
import './ProjectCard.scss';
import Description from './Description';
import Info from './Info';
import Links from './Links';
import Tools from './Tools';

export default function ProjectCard({ data }) {
  const { name, snapshot, description, variables, tools, links } = data;
  const [selected, setSelected] = React.useState('Description');
  const projectSnapshot = require(`../../../Assets/${
    snapshot || 'image-placeholder.jpg'
  }`);
  return (
    <div className='project-card container-glass'>
      <div className='project-snapshot'>
        <img
          src={projectSnapshot}
          alt='project snapshot'
          className='project-snapshot__img'
        />
      </div>

      <p className='project-title'>{name}</p>
      <div className='project-details'>
        {selected === 'Description' && (
          <Description description={description} />
        )}
        {selected === 'Info' && <Info />}
        {selected === 'Tools' && <Tools tools={tools} />}
        {selected === 'Links' && <Links links={links} />}
      </div>
      <div className='project-card-selector selector'>
        <button onClick={() => setSelected('Description')}>Description</button>
        <button onClick={() => setSelected('Info')}>Info</button>
        <button onClick={() => setSelected('Tools')}>Tools</button>
        <button onClick={() => setSelected('Links')}>Links</button>
      </div>
    </div>
  );
}
