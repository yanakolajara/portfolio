import { getLinkIcon } from './icons.utils';

const linkProperties = {
  live: {
    name: 'Live Demo',
    buttonStyle: {
      background: '#388E3C',
    },
    icon: getLinkIcon('live'),
  },
  frontEndRepo: {
    name: 'Frontend Repository',
    buttonStyle: {
      background: '#1976D2',
    },
    icon: getLinkIcon('frontEndRepo'),
  },
  backEndRepo: {
    name: 'Backend Repository',
    buttonStyle: {
      background: '#E64A19',
    },
    icon: getLinkIcon('backEndRepo'),
  },
  wireframes: {
    name: 'Wireframes',
    buttonStyle: {
      background: '#FFA000',
    },
    icon: getLinkIcon('wireframes'),
  },
  managingTool: {
    name: 'Managing Tool',
    buttonStyle: {
      background: '#7B1FA2',
    },
    icon: getLinkIcon('managingTool'),
  },
  other: {
    name: 'Other Links',
    buttonStyle: {
      background: '#455A64',
    },
    icon: getLinkIcon('other'),
  },
};

const getLinkProperties = (key) =>
  linkProperties[key] || linkProperties['default'];

export { getLinkProperties };
