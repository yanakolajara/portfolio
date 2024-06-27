import React from 'react';

export default function Links({ data }) {
  // const displayLinks = () => {
  //   const linksArr = [];
  //   for (const [key, value] of Object.entries(data)) {
  //     linksArr.push(
  //       <a className={key} href={value}>
  //         {value}
  //       </a>
  //     );
  //   }
  //   return linksArr;
  // };
  return (
    <div>
      <p>
        live:
        <a href={data.live}>{data.live}</a>
      </p>
      <p>
        Front-End Repository:
        <a href={data.frontEndRepo}>{data.frontEndRepo}</a>
      </p>
      <p>
        Back-End Repository:
        <a href={data.backEndRepo}>{data.backEndRepo}</a>
      </p>
    </div>
  );
}
