import React, { useState } from 'react';
import { getLinkProperties } from '../../../utils/data.utils.js';
import ImageModal from './ImageModal';
import './ProjectCard.scss';

export default function ProjectCard({ project, skillSetData }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projectImages = [project.snapshot || 'image-placeholder.jpg'];
  const currentImage = require(`../../../assets/images/${projectImages[currentImageIndex]}`);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + projectImages.length) % projectImages.length
    );
  };

  const openImageModal = () => {
    setIsModalOpen(true);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className='tab-content overview'>
            <p className='description'>
              {project.description || 'No description available.'}
            </p>
            <div className='project-meta'>
              <span className='version'>{project.version}</span>
              <span className='date'>{project.variables?.creationDate}</span>
            </div>
          </div>
        );

      case 'tech':
        return (
          <div className='tab-content tech'>
            <div className='tech-stack'>
              {project.tools.map((tool, index) => {
                const skill =
                  skillSetData.find((s) => s.name === tool) || skillSetData[0];
                return (
                  <div key={index} className='tech-item'>
                    <img
                      className='tech-icon'
                      src={require(`../../../assets/icons/${skill['icon-path']}`)}
                      alt={skill.name}
                    />
                    <span className='tech-name'>{tool}</span>
                  </div>
                );
              })}
              {/* {project.tools.length > 6 && (
                <div className='tech-item more'>
                  <span className='more-count'>
                    +{project.tools.length - 6}
                  </span>
                </div>
              )} */}
            </div>
          </div>
        );

      case 'links':
        return (
          <div className='tab-content links'>
            <div className='links-container'>
              {Object.entries(project.links).map(([key, value]) => {
                if (key === 'other' || !value) return null;
                const { name, buttonStyle, icon } = getLinkProperties(key);
                return (
                  <a
                    key={key}
                    className='project-link'
                    href={value}
                    target='_blank'
                    rel='noopener noreferrer'
                    style={buttonStyle}
                  >
                    <span className='link-icon'>{icon}</span>
                    <span className='link-name'>{name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <article className='project-card'>
        <div className='card-header' onClick={openImageModal}>
          <div className='image-container'>
            <img
              src={currentImage}
              alt={project.name}
              className='project-image'
            />

            {projectImages.length > 1 && (
              <>
                <button className='carousel-btn prev\' onClick={prevImage}>
                  &#8249;
                </button>
                <button className='carousel-btn next' onClick={nextImage}>
                  &#8250;
                </button>
              </>
            )}

            {projectImages.length > 1 && (
              <div className='image-indicators'>
                {projectImages.map((_, index) => (
                  <button
                    key={index}
                    className={`indicator ${
                      index === currentImageIndex ? 'active' : ''
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            )}
          </div>

          <div className='project-title-section'>
            <h3 className='project-title'>{project.name}</h3>
            <div className='project-badges'>
              {project.variables?.collaborative && (
                <span className='badge collaborative'>Collaborative</span>
              )}
              <span className='badge status'>{project.version}</span>
            </div>
          </div>
        </div>

        <div className='card-navigation'>
          <button
            className={`nav-tab ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button
            className={`nav-tab ${activeTab === 'tech' ? 'active' : ''}`}
            onClick={() => setActiveTab('tech')}
          >
            Tech Stack
          </button>
          <button
            className={`nav-tab ${activeTab === 'links' ? 'active' : ''}`}
            onClick={() => setActiveTab('links')}
          >
            Links
          </button>
        </div>

        <div className='card-content'>{renderTabContent()}</div>
      </article>

      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={projectImages}
        currentIndex={currentImageIndex}
        onImageChange={setCurrentImageIndex}
        projectName={project.name}
      />
    </>
  );
}
