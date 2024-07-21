import React from 'react';

export default function Projects({
  projectData,
  renderCard,
  setIsModalOpen,
  setProjectModalData,
}) {
  return (
    <div className='projects'>
      <h1 className='title'>Projects</h1>

      <section className='projects-container'>
        {projectData.map((project) => {
          const image = require(`../../assets/images/${
            project['snapshot'] || 'image-placeholder.jpg'
          }`);
          return renderCard({
            ...project,
            image,
            setIsModalOpen,
            setProjectModalData,
          });
        })}
      </section>
    </div>
  );
}
