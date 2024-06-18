import React from 'react';
import ToolCard from './ToolCard';
import './Skills.scss';

export default function Skills() {
  const [selected, setSelected] = React.useState('All');
  const handleClick = (e) => {
    e.preventDefault();
    setSelected(e.target.value);
  };
  console.log(selected);

  return (
    <div className='skills container-glass'>
      <div className='selector'>
        <button onclick={handleClick}>All</button>
        <button onclick={handleClick}>Languages</button>
        <button onclick={handleClick}>Frameworks</button>
        <button onclick={handleClick}>Tools</button>
        <button onclick={handleClick}>Other</button>
      </div>
      <p>Last updated: 01/01/2022</p>
      <div className='scroll-container container-deep'>
        <ToolCard />
      </div>
    </div>
  );
}
