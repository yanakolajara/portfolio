import React from 'react';

export default function Links({ links }) {
  const displayLinks = () => {
    const linksArr = [];
    for (const [key, value] of Object.entries(links)) {
      linksArr.push(<a>{value}</a>);
    }
    return linksArr;
  };
  return <div>{displayLinks()}</div>;
}
