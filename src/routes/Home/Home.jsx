import React from 'react';
import { useModal } from '../../hooks/useModal';
// import { useScroll } from '../../hooks/useScroll';
import Introduction from './Introduction/Introduction';
import Projects from './Projects/Projects';
import SkillSet from './SkillSet/SkillSet';
import ProjectModal from './Projects/ProjectModal';
import './Home.scss';

export default function Home() {
  const { isModalOpen, setIsModalOpen, projectModalData, setProjectModalData } =
    useModal();
  // const { ref } = useScroll();
  const profilePicture = require('../../assets/images/yanako-picture.jpg');
  const skillSetData = require('../../data/skillSetData.json');
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
      <Projects
        projectData={projectData}
        setProjectModalData={setProjectModalData}
        setIsModalOpen={setIsModalOpen}
      />
    </main>
  );
}
