import React from 'react';
import './Projects.scss';

export default function Projects({
  projectData,
  renderCard,
  setIsModalOpen,
  setProjectModalData,
}) {
  const openModal = (e, data) => {
    e.preventDefault();
    setIsModalOpen(true);
    setProjectModalData(data);
  };
  return (
    <div className='projects'>
      <h2 className='title'>Projects</h2>

      <section className='projects-container'>
        {projectData.map((project) => {
          const image = require(`../../../assets/images/${
            project['snapshot'] || 'image-placeholder.jpg'
          }`);
          return (
            <article className='card container-glass'>
              <img
                src={image}
                alt='project snapshot'
                className='card__snapshot'
              />
              <h3 className='card__title'>{project.name}</h3>
              <p className='card__description'>
                {project.description ?? 'No description provided'}
              </p>
              <button
                className='card__learn-more-btn'
                onClick={(e) => openModal(e, project)}
              >
                Learn more
              </button>
            </article>
          );
          // return renderCard({
          //   ...project,
          //   image,
          //   setIsModalOpen,
          //   setProjectModalData,
          // });
        })}
      </section>
    </div>
  );
}
