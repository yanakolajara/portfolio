import React from 'react';

const useModal = () => {
  const [renderProject, setRenderProject] = React.useState({});

  return { renderProject, setRenderProject };
};

export { useModal };
