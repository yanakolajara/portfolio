import React from 'react';
import Introduction from './Introduction';
import Details from './Details';
import Projects from './Projects';
import SkillSet from './SkillSet';
import JobExperience from './JobExperience';
import Education from './Education';
import ProjectCard from './ProjectCard';
import Selector from '../../components/Selector';
import './Home.scss';

export default function Home() {
  const profilePicture = require('../../assets/images/yanako-picture.jpg');
  const skillSetData = require('../../data/skillSetData.json');
  const jobExperienceData = require('../../data/jobExperienceData.json');
  const educationData = require('../../data/educationData.json');
  const projectData = require('../../data/projectsData.json');
  return (
    <main className='home'>
      <Introduction profilePicture={profilePicture} />
      <Details renderSelector={(props) => <Selector {...props} />}>
        <SkillSet skillSetData={skillSetData} />
        <Education educationData={educationData} />
        <JobExperience jobExperienceData={jobExperienceData} />
      </Details>
      <Projects projectData={projectData}>
        <ProjectCard />
      </Projects>
    </main>
  );
}
