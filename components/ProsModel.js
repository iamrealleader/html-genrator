"use client"
import React, { useContext, useState } from 'react';
import { FeaturesContext } from './Context';

const Pros = ({ setProsModel }) => {
  const { pros, cons, setPros, setCons } = useContext(FeaturesContext);
  const [prosData, setProsData] = useState([...pros]);
  const [consData, setConsData] = useState([...cons]);

  const closeModel = () => {
    setProsModel(false);
  };

  const saveData = () => {
    setPros(prosData);
    setCons(consData);
    setProsModel(false);
  };

  const addNewProRow = () => {
    setProsData([...prosData, '']);
  };

  const addNewConRow = () => {
    setConsData([...consData, '']);
  };

  const handleDeletePro = (index) => {
    const updatedPros = [...prosData];
    updatedPros.splice(index, 1);
    setProsData(updatedPros);
  };

  const handleDeleteCon = (index) => {
    const updatedCons = [...consData];
    updatedCons.splice(index, 1);
    setConsData(updatedCons);
  };

  return (
    <div className='fixed top-0 left-0 w-[100vw] h-[100vh] overflow-y-scroll bg-slate-200 flex flex-col'>
      <div className="pros z-10 flex justify-center items-center">
        <div className="pros_values">
          <h1 className="pros_h1">Pros</h1>
          {prosData.map((data, index) => (
            <div key={index} className="pros_container">
              <svg
                className="pros_svg_icon"
                viewBox="0 0 24 24"
                fill="currentColor"
                height="1em"
                width="1em"
              >
                <path d="M10 15.586l-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z" />
              </svg>
              <input
                onChange={(e) => {
                  const updatedPros = [...prosData];
                  updatedPros[index] = e.target.value;
                  setProsData(updatedPros);
                }}
                value={data}
                type="text"
                className="pros_real_data w-full px-10"
              />
              <button
                onClick={() => handleDeletePro(index)}
                className="delete_button bg-red-600 text-white mx-2 rounded p-1"
              >
                Delete
              </button>
            </div>
          ))}
          <div className="add-row flex justify-center items-center">
            <button
              onClick={addNewProRow}
              id="addRow"
              className="px-10 py-2 text-lg text-white font-bold bg-blue-500 rounded-2xl my-5"
            >
              Add New Pro
            </button>
          </div>
        </div>

        <div className="cons_values">
          <h1 className="cons_h1">Cons</h1>
          {consData.map((data, index) => (
            <div key={index} className="cons_container">
              <svg
                className="cons_svg_icon"
                fill="none"
                viewBox="0 0 15 15"
                height="1em"
                width="1em"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M11.782 4.032a.575.575 0 10-.813-.814L7.5 6.687 4.032 3.218a.575.575 0 00-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 00.814.814L7.5 8.313l3.469 3.469a.575.575 0 00.813-.814L8.313 7.5l3.469-3.468z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                onChange={(e) => {
                  const updatedCons = [...consData];
                  updatedCons[index] = e.target.value;
                  setConsData(updatedCons);
                }}
                value={data}
                type="text"
                className="cons_real_data w-full px-10"
              />
              <button
                onClick={() => handleDeleteCon(index)}
                className="delete_button bg-red-600 text-white mx-2 rounded p-1"
              >
                Delete
              </button>
            </div>
          ))}
          <div className="add-row flex justify-center items-center">
            <button
              onClick={addNewConRow}
              id="addRow"
              className="px-10 py-2 text-lg text-white font-bold bg-blue-500 rounded-2xl my-5"
            >
              Add New Con
            </button>
          </div>
        </div>
      </div>
      <div className="edits flex justify-center items-center">
        <button
          onClick={saveData}
          id="editFeatures"
          className="px-10 py-2 text-lg text-white font-bold bg-green-500 rounded-2xl mr-10"
        >
          Save
        </button>
        <button
          onClick={closeModel}
          id="editFeatures"
          className="px-10 py-2 text-lg text-white font-bold bg-slate-500 rounded-2xl mx-2"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Pros;
