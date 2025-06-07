import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.scss';

function Projects({ projectData, skillSetData }) {
  return (
    <section id='projects' className='projects'>
      <div className="section-header">
        <h2 className='section-title'>Featured Projects</h2>
        <p className="section-subtitle">
          Explore my latest work and technical implementations
        </p>
      </div>
      
      <div className='projects-grid'>
        {projectData.map((project, index) => (
          <ProjectCard 
            key={project.route || index}
            project={project}
            skillSetData={skillSetData}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;