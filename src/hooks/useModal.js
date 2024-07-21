import React, { useEffect } from 'react';
import ProjectModal from '../components/ProjectModal/ProjectModal';

const useModal = () => {
  const [projectModalData, setProjectModalData] = React.useState({});
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  return { isModalOpen, setIsModalOpen, projectModalData, setProjectModalData };
};

export { useModal };
