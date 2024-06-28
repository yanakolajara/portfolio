import React from 'react';

export default function Selector({ options, selected, setSelected }) {
  return (
    <div className='selector'>
      {options.map((option) => (
        <button
          className={selected === option && 'active'}
          onClick={() => setSelected(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
