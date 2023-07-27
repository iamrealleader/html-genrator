"use client"
import React , { Context, useContext } from 'react'
import { FeaturesContext } from './Context'

const Details = ({edit}) => {
  const { detailsData } = useContext(FeaturesContext);
  return (
    <div id='details' className="details m-1">
        <div className=" my-2 text-xl font-bold">{detailsData.title}</div>
        <div className="">{detailsData.description}</div>
    </div>
  )
}

export default Details
