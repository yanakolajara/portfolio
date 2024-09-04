import { getLinkIcon } from './icons.utils';

const linkProperties = {
  live: {
    name: 'Live Demo',
    buttonStyle: {
      background: '#388E3C',
      border: '1px solid #43a148',
    },
    icon: getLinkIcon('live'),
  },
  frontEndRepo: {
    name: 'Frontend Repository',
    buttonStyle: {
      background: '#1976D2',
      border: '1px solid #2988e6',
    },
    icon: getLinkIcon('frontEndRepo'),
  },
  backEndRepo: {
    name: 'Backend Repository',
    buttonStyle: {
      background: '#E64A19',
      border: '1px solid #ff6c40',
    },
    icon: getLinkIcon('backEndRepo'),
  },
  wireframes: {
    name: 'Wireframes',
    buttonStyle: {
      background: '#FFA000',
      border: '1px solid #ffb73b',
    },
    icon: getLinkIcon('wireframes'),
  },
  managingTool: {
    name: 'Managing Tool',
    buttonStyle: {
      background: '#7B1FA2',
      border: '1px solid #9435bd',
    },
    icon: getLinkIcon('managingTool'),
  },
  default: (key) => {
    const name = nameFormat(key);
    return {
      name,
      buttonStyle: {
        background: '#455A64',
      },
      icon: getLinkIcon('other'),
    };
  },
};

const getLinkProperties = (key) =>
  linkProperties[key] || linkProperties.default(key);

const nameFormat = (name) => name.replace(/-/g, ' ');
export { getLinkProperties };
