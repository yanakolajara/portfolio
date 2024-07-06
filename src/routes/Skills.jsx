import React from 'react';
import ToolCard from './Home/Skills/ToolCard';
import Selector from '../components/Selector';

export default function Skills() {
  const [selected, setSelected] = React.useState('All');
  const handleClick = (e) => {
    e.preventDefault();
    setSelected(e.target.value);
  };
  console.log(selected);

  return (
    <div className='skills container-glass'>
      <Selector
        options={['All', 'Languages', 'Frameworks', 'Tools', 'Other']}
        selected={selected}
        setSelected={setSelected}
      />

      <p>Last updated: 01/01/2022</p>
      <div className='scroll-container container-deep'>
        <ToolCard />
      </div>
    </div>
  );
}
