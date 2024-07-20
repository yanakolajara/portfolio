const linkNames = {
  live: 'Live Demo',
  frontEndRepo: 'Front-end Repository',
  backEndRepo: 'Back-end Repository',
  wireframes: 'Wireframes',
  managingTool: 'Managing Tool',
  other: 'Other Links',
};

const getLinkName = (key) => linkNames[key] || 'Other Links';

export { getLinkName };
