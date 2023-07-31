"use client";

import React , { useContext } from 'react';
import { FeaturesContext } from './Context';

const Features = () => {
  const { myfeatures } = useContext(FeaturesContext);
  return (
    <div id='features' className='tool-overview m-1'>
      <h2 className='text-3xl font-bold '>Features</h2>
      { myfeatures.map((feature, index) => (
        <div id={feature.name} className="feature-table bg-slate-100 py-3 my-5 px-3 md:px-10 rounded-2xl" key={index}>
          <p className='feature_p'>{feature.description}</p>
          <table className='w-full'>
            <thead className='feature_heading' >
              <tr><th colspan="2">{feature.name}</th></tr>
            </thead>
            <tbody className='w-full'>
              {Object.entries(feature.rows).map(([key, value], rowIndex) => (
                <tr className={rowIndex % 2 === 0 ? 'bg-white w-full' : ''} key={rowIndex}>
                  <td className="px-2 md:px-10 py-2">{key}</td>
                  <td className="px-2 md:px-10 py-2">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Features;
