import React from 'react';

export default function ProjectCard({
  image,
  name,
  description,
  tools,
  links,
  setIsModalOpen,
  setProjectModalData,
}) {
  const openModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
    setProjectModalData({ image, name, description, tools, links });
  };
  return (
    <article className='project-card container-glass'>
      <img src={image} alt='project snapshot' className='project-snapshot' />
      <p className='project-title'>{name}</p>
      <p className='project-description'>
        {description ?? 'No description provided'}
      </p>
      <button className='learn-more-button' onClick={openModal}>
        Learn more
      </button>
    </article>
  );
}
