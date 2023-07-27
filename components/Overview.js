"use client"

import React , { Context, useContext } from 'react'
import { FeaturesContext } from './Context'

const Overview = () => {
    const { overviewData } = useContext(FeaturesContext);

  return (
    <div className='Overview_container' id='overview'>
        <div className="overview-des flex-col">
            <div className="Overview_top_heading">
                Overview
            </div>
                <div className="overview_main_conatiner">
                    {overviewData && overviewData.data.map((data, index) => (
                        <div className="Overview_line_container">
                            <div className="flex justify-start items-start" key={index}>
                                {/* <img className=' w-10 mx-2' src={data.img} alt="icon" /> */}
                                    {/* Use dangerouslySetInnerHTML to render the SVG */}
                                    <div className='overview_icons' dangerouslySetInnerHTML={{ __html: data.img }} />
                                <div className="details">
                                    <div className="overview_name">{data.name}</div>
                                    <div className="overview_description">{data.desc}</div>
                                </div>
                            </div>  
                            <div className="overview_bottom_line"></div>    
                        </div>
                    ))}
                </div>
        </div>
  </div>
  )
}

export default Overview
