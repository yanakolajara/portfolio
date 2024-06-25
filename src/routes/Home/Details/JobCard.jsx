import React from 'react';

export default function JobCard({ data }) {
  return (
    <div>
      <p>{data.company}</p>
      <p>{data.title}</p>
      <p>
        {data.startDate} - {data.endDate}
      </p>
      <p>{data.description}</p>
    </div>
  );
}
