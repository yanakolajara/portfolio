import React from 'react';

export default function Selector() {
  const [selected, setSelected] = React.useState('select-summary');
  return (
    <div className='selector'>
      {/* <button
        className='select-education'
        onClick={(e) => setSelected(e.target.className)}
      >
        education
      </button>
      <button
        className='select-summary'
        onClick={(e) => setSelected(e.target.className)}
      >
        summary
      </button>
      <button
        className='select-job-experience'
        onClick={(e) => setSelected(e.target.className)}
      >
        job experience
      </button> */}
    </div>
  );
}
