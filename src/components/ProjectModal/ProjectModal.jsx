import React from 'react';
import { getLinkProperties } from '../../utils/data.utils.js';
import { FiMinimize2 } from 'react-icons/fi';
import './ProjectModal.scss';

export default function ProjectModal({
  isModalOpen,
  setIsModalOpen,
  projectData,
  skillSetData,
}) {
  if (!isModalOpen) return null;
  return (
    <div className='ProjectModal'>
      <article className='content container-glass'>
        <FiMinimize2
          onClick={() => setIsModalOpen(false)}
          className='close-button'
        />
        <h1 className='title'>{projectData.name}</h1>
        <div className='information'>
          <img
            className='snapshot'
            src={projectData.image}
            alt={projectData.name}
            height={250}
          />
          <p className='description'>{projectData['description']}</p>
          <div className='tools'>
            <h2 className='title'>Tools Used</h2>
            <div className='tools__container'>
              {projectData.tools.map((tool) => {
                const skill =
                  skillSetData.find((s) => s.name === tool) || skillSetData[0];
                return (
                  <article className='tool'>
                    <img
                      className='tool__icon'
                      src={require(`../../assets/icons/${skill['icon-path']}`)}
                      alt={skill.name}
                    />
                    <h1 className='tool__name'>{tool}</h1>
                  </article>
                );
              })}
            </div>
          </div>
          <div className='links'>
            <h2 className='title'>Links</h2>
            <div className='links__container'>
              {Object.entries(projectData.links).map(([key, value]) => {
                if (key === 'other' || !value) return null;
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
