import React from 'react';
import './Tools.scss';

export default function Tools({ data }) {
  return (
    <div className='tools'>
      {data.map((tool) => (
        <p>{tool}</p>
      ))}
    </div>
  );
}
