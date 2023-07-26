"use client"
import React, { useState , Context, useContext } from 'react';
import { FeaturesContext } from './Context';

const OverviewModel = ({ setOverviewModel }) => {
  const { overviewData , setOverviewData } = useContext(FeaturesContext);
  const [image, setImage] = useState(overviewData.image);
  const [mydata, setMydata] = useState(overviewData.data);
  const [status, setStatus] = useState(overviewData.status);
  const [date, setDate] = useState(overviewData.date);

  const closeModel = () => {
    setOverviewModel(false);
  };

  const saveData = () => {
    setOverviewData({image,data : mydata , status , date });
    console.log(overviewData);
    setOverviewModel(false);
  };

  const handleDataChange = (e, index) => {
    const { name, value } = e.target;
    const updatedData = mydata.map((item, i) =>
      i === index ? { ...item, [name]: value } : item
    );
    setMydata(updatedData);
  };

  const handleAddNewFeature = () => {
    setMydata([...mydata, { img: 'https://cdn-icons-png.flaticon.com/128/2633/2633329.png', name: 'enter', desc: 'enter' }]);
  };

  const handleDeleteFeature = (index) => {
    const updatedData = mydata.filter((_, i) => i !== index);
    setMydata(updatedData);
  };


  return (
    <div className="model bg-slate-100 h-full w-full py-10 fixed top-0 backdrop-blur-3xl overflow-y-scroll">
      <div className="flex flex-col  rounded-2xl p-10">
        <div className="flex flex-wrap bg-slate-300 p-6 gap-10 rounded-2xl">
          <div className="inputs flex flex-col w-[70%] mx-auto my-10">
                  <label className='font-bold text-lg' htmlFor={`Image`}>Paste Image link here</label>
                  <input
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    name="img"
                    id={`Image`}
                    className="w-full px-2 py-3 my-2 rounded-lg bg-white"
                    type="text"
                  />
          </div>
          {mydata.map((data, index) => (
            <div className="w-full flex flex-col justify-center items-center" key={index}>
              <h1 className="text-xl font-bold">Feature#{index + 1}</h1>
              <div className="inputs flex flex-col w-[70%]">
                <label className='font-bold text-lg' htmlFor={`imageLink${index}`}>Paste Icon link here</label>
                <input
                  value={data.img}
                  onChange={(e) => handleDataChange(e, index)}
                  name="img"
                  id={`imageLink${index}`}
                  className="w-full px-2 py-3 my-2 rounded-lg bg-white"
                  type="text"
                />
              </div>
              <div className="inputs flex flex-col w-[70%]">
                <label className='font-bold text-lg' htmlFor={`overviewTitle${index}`}>Title</label>
                <input
                  value={data.name}
                  onChange={(e) => handleDataChange(e, index)}
                  name="name"
                  id={`overviewTitle${index}`}
                  className="w-full px-2 py-3 my-2 rounded-lg bg-white"
                  type="text"
                />
              </div>
              <div className="inputs flex flex-col w-[70%]">
                <label className='font-bold text-lg' htmlFor={`overviewdesc${index}`}>Description</label>
                <input
                  value={data.desc}
                  onChange={(e) => handleDataChange(e, index)}
                  name="desc"
                  id={`overviewdesc${index}`}
                  className="w-full px-2 py-3 my-2 rounded-lg bg-white"
                  type="text"
                />
              </div>
              <button
                className="my-3 px-4 py-2 bg-red-500 text-white rounded-md"
                onClick={() => handleDeleteFeature(index)}
              >
                Delete
              </button>
            </div>
          ))}
           <button
            className="my-3 px-4 py-2 bg-green-500 text-white rounded-md"
            onClick={handleAddNewFeature}
          >
            Add New Feature
          </button>
        </div>
        <div className="flex justify-center items-center p-5">
          <div className="staus">
            <div className="inputs flex flex-col w-[70%]">
              <label className='font-bold text-lg' htmlFor="status">Market Status</label>
              <input
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                name="status"
                id="status"
                className="w-72 px-2 py-3 my-2 rounded-lg bg-white"
                type="text"
              />
            </div>
          </div>
          <div className="w-[1px] h-10 bg-slate-400 mx-16"></div>
          <div className="release-date">
            <div className="inputs flex flex-col w-[70%]">
              <label className='font-bold text-lg' htmlFor="date">Release Date</label>
              <input
                value={date}
                onChange={(e) => setDate(e.target.value)}
                name="date"
                id="date"
                className="w-72 px-2 py-3 my-2 rounded-lg bg-white"
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="edits flex justify-center items-center">
        <button onClick={saveData} id="editOverview" className="px-10 py-2 text-lg text-white font-bold bg-green-500 rounded-2xl mr-10">
          Save
        </button>
        <button onClick={closeModel} id="editOverview" className="px-10 py-2 text-lg text-white font-bold bg-slate-500 rounded-2xl mx-2">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default OverviewModel;
