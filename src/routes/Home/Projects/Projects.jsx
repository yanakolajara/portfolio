import React from 'react';
import './Projects.scss';

function Projects(props) {
  const {
    projectData,
    // renderCard,
    setIsModalOpen,
    setProjectModalData,
  } = props;
  const openModal = (e, data) => {
    e.preventDefault();
    setIsModalOpen(true);
    setProjectModalData(data);
  };
  // console.log('REF HERE', ref);

  return (
    <div id='projects' className='projects'>
      <h2 className='title'>Projects</h2>
      <section className='projects-container'>
        {projectData.map((project) => {
          const image = require(`../../../assets/images/${
            project['snapshot'] || 'image-placeholder.jpg'
          }`);
          console.log('image', image);
          return (
            <article className='card container-glass'>
              <img
                src={
                  image ||
                  require(`../../../assets/images/image-placeholder.jpg`)
                }
                alt='project snapshot'
                className='card__snapshot'
              />

              <button
                className='card__learn-more-btn'
                onClick={(e) => openModal(e, project)}
              >
                {project.name}
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

export default React.forwardRef(Projects);
