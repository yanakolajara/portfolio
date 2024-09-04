import React from 'react';
import { useModal } from '../../hooks/useModal';
import Introduction from './Introduction/Introduction';
import Projects from './Projects/Projects';
import SkillSet from './SkillSet/SkillSet';
import Experience from './Experience/Experience';
import ProjectModal from './Projects/ProjectModal';
import './Home.scss';

export default function Home() {
  const { isModalOpen, setIsModalOpen, projectModalData, setProjectModalData } =
    useModal();
  const profilePicture = require('../../assets/images/yanako-picture.jpg');
  const skillSetData = require('../../data/skillSetData.json');
  const jobExperienceData = require('../../data/jobExperienceData.json');
  const educationData = require('../../data/educationData.json');
  const projectData = require('../../data/projectsData.json');
  return (
    <main className='home'>
      <ProjectModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        projectData={projectModalData}
        skillSetData={skillSetData}
      />
      <Introduction profilePicture={profilePicture} />
      <SkillSet skillSetData={skillSetData} />
      <Experience
        jobExperienceData={jobExperienceData}
        educationData={educationData}
      />
      <Projects
        projectData={projectData}
        setProjectModalData={setProjectModalData}
        setIsModalOpen={setIsModalOpen}
      />
    </main>
  );
}
