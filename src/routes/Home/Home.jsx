import React from 'react';
import Introduction from './Introduction';
import Details from './Details';
import Projects from './Projects';
import SkillSet from './SkillSet';
import JobExperience from './JobExperience';
import Education from './Education';
import ProjectCard from './ProjectCard';
import Selector from '../../components/Selector';
import ProjectModal from '../../components/ProjectModal/ProjectModal';
import { useModal } from '../../hooks/useModal';
import './Home.scss';

export default function Home() {
  const profilePicture = require('../../assets/images/yanako-picture.jpg');
  const skillSetData = require('../../data/skillSetData.json');
  const jobExperienceData = require('../../data/jobExperienceData.json');
  const educationData = require('../../data/educationData.json');
  const projectData = require('../../data/projectsData.json');

  const { isModalOpen, setIsModalOpen, projectModalData, setProjectModalData } =
    useModal();
  return (
    <main className='home'>
      <ProjectModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        projectData={projectModalData}
        skillSetData={skillSetData}
      />
      <Introduction profilePicture={profilePicture} />
      <Details renderSelector={(props) => <Selector {...props} />}>
        <SkillSet skillSetData={skillSetData} />
        <Education educationData={educationData} />
        <JobExperience jobExperienceData={jobExperienceData} />
      </Details>
      <Projects
        projectData={projectData}
        setIsModalOpen={setIsModalOpen}
        setProjectModalData={setProjectModalData}
        renderCard={(props) => <ProjectCard {...props} />}
      ></Projects>
    </main>
  );
}
