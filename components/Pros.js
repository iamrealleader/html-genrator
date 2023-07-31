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
            { items === pros ? <svg className="pros_svg_icon" viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
                        <path d="M10 15.586l-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z" />
                      </svg>
                      :
                      <svg className="cons_svg_icon " fill="none" viewBox="0 0 15 15" height="1em" width="1em">
                       <path fill="currentColor" fillRule="evenodd" d="M11.782 4.032a.575.575 0 10-.813-.814L7.5 6.687 4.032 3.218a.575.575 0 00-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 00.814.814L7.5 8.313l3.469 3.469a.575.575 0 00.813-.814L8.313 7.5l3.469-3.468z" clipRule="evenodd"/>
                      </svg>
            }
            {data}
          </li>
        ))}
      </ol>
    );
  };

  return (
    <div className="pros" id="pros">
      <div className="pros_values">
        <h3 className="pros_h1">Pros</h3>
        {pros && renderListItems(pros)}
      </div>
      <div className="cons_values">
        <h3 className="cons_h1">Cons</h3>
        {cons && renderListItems(cons)}
      </div>
    </div>
  );
};

export default Pros;
