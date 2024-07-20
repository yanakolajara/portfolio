import { HiStatusOnline } from 'react-icons/hi';
import { FaLink } from 'react-icons/fa6';

const getLinkIcon = (name) => {
  const iconStyle = { fontSize: '1.5rem', color: 'white' };
  switch (name) {
    case 'live':
      return <HiStatusOnline style={iconStyle} />;
    case 'frontEndRepo':
      return <FaLink style={iconStyle} />;
    case 'backEndRepo':
      return <FaLink style={iconStyle} />;
    case 'wireframes':
      return <FaLink style={iconStyle} />;
    case 'managingTool':
      return <FaLink style={iconStyle} />;
    default:
      return <FaLink style={iconStyle} />;
  }
};

export { getLinkIcon };
