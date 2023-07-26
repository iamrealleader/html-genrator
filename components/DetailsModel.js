"use client"
import React, { useState , Context, useContext } from 'react';
import { FeaturesContext } from './Context';


const DetailsModel = ({ setDetailsModel }) => {
  const { detailsData , setDetailsData } = useContext(FeaturesContext)
  const [title, setTitle] = useState(detailsData.title);
  const [description, setDescription] = useState(detailsData.description);

  const closeModel = () => {
    setDetailsModel(false);
  };

  const saveData = () => {
    setDetailsData({title , description})
    setDetailsModel(false);
  };

  return (
    <div className="model bg-slate-100 w-full h-full py-10 fixed top-0 backdrop-blur-3xl overflow-y-scroll">
      <div className="flex flex-col rounded-2xl p-10">
        <div className="flex flex-wrap bg-slate-300 p-6 gap-10 rounded-2xl">
          <div className="w-full flex flex-col justify-center items-center">
            <div className="inputs flex flex-col w-[70%]">
              <label htmlFor="title">Title</label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                name="title"
                id="title"
                className="w-full px-2 py-3 my-2 rounded-lg bg-white"
                type="text"
              />
            </div>
            <div className="inputs flex flex-col w-[70%]">
              <label htmlFor="description">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                name="description"
                id="description"
                className="w-full h-40 px-2 py-3 my-2 rounded-lg bg-white"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="edits flex justify-center items-center">
        <button
          onClick={saveData}
          id="editDetails"
          className="px-10 py-2 text-lg text-white font-bold bg-green-500 rounded-2xl mr-10"
        >
          Save
        </button>
        <button
          onClick={closeModel}
          id="editDetails"
          className="px-10 py-2 text-lg text-white font-bold bg-slate-500 rounded-2xl mx-2"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DetailsModel;
