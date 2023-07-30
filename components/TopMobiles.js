import React, { useContext } from 'react';
import { FeaturesContext } from './Context';

const TopMobiles = () => {
  const { mobiles } = useContext(FeaturesContext);
  console.log(mobiles);

  return (
    <div className='topMobiles'>
      <h3 className="topMobilesHeading">{mobiles.heading}</h3>
      <div className="topMobilesContainer">
        {mobiles.mobiles.map((data, index) => (
          <div key={index} className="mobileCard">
            <h4 className='topMobilesHeading'>{data.name}</h4>
            <div className="mobilesMains">
              <div className="mobileImage">
                <img src={data.image} alt={data.name} />
              </div>
              <div className="keyPoints">
                <ul>
                  {data.points.map((point, i) => (
                    <li key={i}>
                          <svg
                          className='mobiles_svg'
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            height="1em"
                            width="1em"
                          >
                            <path d="M5.536 21.886a1.004 1.004 0 001.033-.064l13-9a1 1 0 000-1.644l-13-9A.998.998 0 005 3v18a1 1 0 00.536.886zM7 4.909L17.243 12 7 19.091V4.909z" />
                          </svg>
                          <div className='mobile_points'>{point}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopMobiles;
