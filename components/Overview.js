"use client"

import React , { Context, useContext } from 'react'
import { FeaturesContext } from './Context'

const Overview = () => {
    const { overviewData } = useContext(FeaturesContext);

  return (
    <div className='flex flex-col gap-10 p-3' id='overview'>
        <div className="overview-des flex-col">
            <div className="text-2xl font-bold py-5">
                Overview
            </div>
            <div className="flex flex-col bg-slate-100 rounded-2xl p-2 md:p-10">
                <div className=" flex flex-wrap bg-white p-2 md:p-6 gap-10 rounded-2xl">
                    {overviewData && overviewData.data.map((data, index) => (
                        <div className="flex justify-start items-start" key={index}>
                            <img className=' w-10 mx-2' src={data.img} alt="icon" />
                            <div className="details">
                                <div className="overview-name font-bold">{data.name}</div>
                                <div className="overview-description">{data.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center items-center p-5">
                    <div className="staus">
                        <div className='font-bold'>Market Status</div>
                        <div className='text-center'>{overviewData.status}</div>
                    </div>
                    <div className="release w1 h-10 bg-slate-400 mx-16"></div>
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
