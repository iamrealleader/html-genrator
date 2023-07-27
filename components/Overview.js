"use client"

import React , { Context, useContext } from 'react'
import { FeaturesContext } from './Context'

const Overview = () => {
    const { overviewData } = useContext(FeaturesContext);

  return (
    <div className='Overview_container flex flex-col gap-10 p-3' id='overview'>
        <div className="overview-des flex-col">
            <div className="Overview_top_heading">
                Overview
            </div>
            <div className="overview_middle_container flex flex-col bg-slate-100 rounded-2xl md:p-10">
                <div className=" flex flex-wrap bg-white p-2 md:p-6 gap-10 rounded-2xl">
                    {overviewData && overviewData.data.map((data, index) => (
                        <div className="flex justify-start items-start" key={index}>
                            {/* <img className=' w-10 mx-2' src={data.img} alt="icon" /> */}
                                {/* Use dangerouslySetInnerHTML to render the SVG */}
                                <div className='overview_icons' dangerouslySetInnerHTML={{ __html: data.img }} />
                            <div className="details">
                                <div className="overview_name">{data.name}</div>
                                <div className="overview_description">{data.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="Overview_down_container">
                    <div className="staus">
                        <div className='font-bold'>Market Status</div>
                        <div className='text-center'>{overviewData.status}</div>
                    </div>
                    <div className="overview_line"></div>
                    <div className="release-date">
                        <div className='font-bold'>Release Date</div>
                        <div className='text-center'>{overviewData.date}</div>
                    </div>
                </div>
            </div>
        </div>
  </div>
  )
}

export default Overview
