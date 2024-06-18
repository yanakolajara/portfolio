import React from 'react';

export default function ToolCard({ inDevelopment = false }) {
  return (
    <div className='tool-card' style={{ border: '1px solid black' }}>
      <div className='tool-icon'>Tool icon</div>
      <div className='tool-name'>Tool name</div>
      {inDevelopment && <p className='in-development'>In Development</p>}
    </div>
  );
}
