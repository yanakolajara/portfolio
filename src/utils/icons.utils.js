import { HiStatusOnline } from 'react-icons/hi';
import { FaLink } from 'react-icons/fa6';
import { ImGithub } from 'react-icons/im';
import { RiLayout5Fill } from 'react-icons/ri';
import { BsFillKanbanFill } from 'react-icons/bs';

const getLinkIcon = (name) => {
  const iconStyle = { fontSize: '1.5rem', color: 'white' };
  switch (name) {
    case 'live':
      return <HiStatusOnline style={iconStyle} />;
    case 'frontEndRepo':
      return <ImGithub style={iconStyle} />;
    case 'backEndRepo':
      return <ImGithub style={iconStyle} />;
    case 'wireframes':
      return <RiLayout5Fill style={iconStyle} />;
    case 'managingTool':
      return <BsFillKanbanFill style={iconStyle} />;
    default:
      return <FaLink style={iconStyle} />;
  }
};

export { getLinkIcon };
