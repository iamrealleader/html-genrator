"use client";

import React from 'react';

const Compared = ({ data }) => {
  return (
    <div id='features' className='tool-overview m-1'>
      <h2 className='text-3xl font-bold'>Features</h2>
      {data.link1.map((link1Feature, index) => {
        const link2Feature = data.link2[index];
        return (
          <div
            id={link1Feature.name}
            className='feature-table bg-slate-100 py-3 my-5 px-3 md:px-10 rounded-2xl'
            key={index}
          >
            <table className='w-full'>
              <thead className='feature_heading'>
                <tr>
                  <th colSpan='3'>{link1Feature.name}</th>
                </tr>
              </thead>
              <tbody className='w-full'>
                {Object.entries(link1Feature.rows).map(([key, value], rowIndex) => (
                  <tr className={rowIndex % 2 === 0 ? 'bg-white w-full' : ''} key={rowIndex}>
                    <td className='px-2 md:px-10 py-2'>{key}</td>
                    <td className='px-2 md:px-10 py-2'>{value}</td>
                    <td className='px-2 md:px-10 py-2'>{link2Feature.rows[key]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
};

export default Compared;
