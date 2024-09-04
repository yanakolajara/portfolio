import React from 'react';

const useModal = () => {
  const [projectModalData, setProjectModalData] = React.useState({});
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  React.useEffect(() => {
    console.log(projectModalData);
  }, [projectModalData]);
  return { isModalOpen, setIsModalOpen, projectModalData, setProjectModalData };
};

export { useModal };
