import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.scss';

function Projects(props) {
  const { projectData, setIsModalOpen, setProjectModalData } = props;

  return (
    <div id='projects' className='projects'>
      <h2 className='title'>Projects</h2>
      <section className='projects-container'>
        {projectData.map((project) => {
          return (
            <ProjectCard
              project={project}
              setIsModalOpen={setIsModalOpen}
              setProjectModalData={setProjectModalData}
            />
          );
        })}
      </section>
    </div>
  );
}

export default React.forwardRef(Projects);
