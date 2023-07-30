"use client"

import React, { useContext } from 'react';
import { FeaturesContext } from './Context';

const Pros = () => {
  const { pros, cons } = useContext(FeaturesContext);

  const renderListItems = (items) => {
    return (
      <ol className="list-disc pl-6">
        {items.map((data, index) => (
          <li key={index} className="pros_real_data">
            <svg
              className="pros_svg_icon mr-2"
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1em"
              width="1em"
            >
              <path d="M10 15.586l-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z" />
            </svg>
            {data}
          </li>
        ))}
      </ol>
    );
  };

  return (
    <div className="pros" id="pros">
      <div className="pros_values">
        <h1 className="pros_h1">Pros</h1>
        {pros && renderListItems(pros)}
      </div>
      <div className="cons_values">
        <h1 className="cons_h1">Cons</h1>
        {cons && renderListItems(cons)}
      </div>
    </div>
  );
};

export default Pros;
