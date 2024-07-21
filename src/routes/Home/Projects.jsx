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
      {/* <button className='tag-selector'>Look for</button>
      <button className='sorting-selector'>Sort By</button>
      <input type='text' className='search-bar' id='' /> */}
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
