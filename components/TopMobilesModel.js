import React, { useState, useContext } from 'react';
import { FeaturesContext } from './Context';

const TopMobilesModel = ({ setMobileModel }) => {
  const { mobiles, setMobiles } = useContext(FeaturesContext);
  const [mobilesData, setMobilesData] = useState([...mobiles.mobiles]);
  const [ topHeading , setTopHeading ] = useState(mobiles.heading);

  const closeModel = () => {
    setMobileModel(false);
  };

  const saveData = () => {
    // Update the mobiles state with the modified data
    setMobiles((prevMobiles) => ({ ...prevMobiles, heading : topHeading , mobiles: mobilesData }));
    setMobileModel(false);
  };

  const handleInputChange = (event, index, field, pointIndex) => {
    const { value } = event.target;
    const updatedData = mobilesData.map((item, i) => {
      if (i === index) {
        if (field === 'points') {
          return {
            ...item,
            points: item.points.map((point, pIndex) => (pIndex === pointIndex ? value : point)),
          };
        } else {
          return { ...item, [field]: value };
        }
      } else {
        return item;
      }
    });
    setMobilesData(updatedData);
  };

  const handleAddMobile = () => {
    const newMobile = {
      name: 'New Mobile',
      image:
        'https://i.gadgets360cdn.com/products/large/lava-agni-2-5g-lava-db-680x800-1684220775.jpg?downsize=*:180',
      points: [''],
    };
    setMobilesData((prevData) => [...prevData, newMobile]);
  };

  const handleDeleteMobile = (index) => {
    setMobilesData((prevData) => prevData.filter((_, i) => i !== index));
  };

  const handleAddPoint = (index) => {
    const updatedData = mobilesData.map((item, i) => {
      if (i === index) {
        return { ...item, points: [...item.points, ''] };
      } else {
        return item;
      }
    });
    setMobilesData(updatedData);
  };

  const handleRemovePoint = (mobileIndex, pointIndex) => {
    const updatedData = mobilesData.map((item, i) => {
      if (i === mobileIndex) {
        return { ...item, points: item.points.filter((_, pIndex) => pIndex !== pointIndex) };
      } else {
        return item;
      }
    });
    setMobilesData(updatedData);
  };


  return (
    <div className="fixed top-0 left-0 w-full h-full bg-slate-100 backdrop-blur-3xl overflow-y-scroll">
      <div className="w-full flex flex-col rounded-2xl p-10">
      <label className="block mb-1">
                 Top Heading
                  <input
                    type="text"
                    value={topHeading}
                    onChange={(e) => setTopHeading(e.target.value)}
                    className="border border-gray-300 p-2 w-full"
                  />
                </label>
        <div className="mobiles-items">
          {mobilesData.map((data, index) => (
            <div key={index} className="mobileContainer bg-slate-100 p-3 my-5 rounded-2xl w-full flex flex-col">
              <div className="mobileDes">
                <label className="block mb-1">
                  Name:
                  <input
                    type="text"
                    value={data.name}
                    onChange={(e) => handleInputChange(e, index, 'name')}
                    className="border border-gray-300 p-2 w-full"
                  />
                </label>
                <label className="block mb-1">
                  Image URL:
                  <input
                    type="text"
                    value={data.image}
                    onChange={(e) => handleInputChange(e, index, 'image')}
                    className="border border-gray-300 p-2 w-full"
                  />
                </label>
                <div>
                  <label className="block mb-1">Key Points:</label>
                  {data.points.map((point, pointIndex) => (
                    <div key={pointIndex} className="flex items-center mb-2">
                      <input
                        type="text"
                        value={point}
                        onChange={(e) => handleInputChange(e, index, 'points', pointIndex)}
                        className="border border-gray-300 p-2 flex-grow"
                      />
                      <button
                        className="ml-2 px-2 py-1 bg-red-500 text-white rounded"
                        onClick={() => handleRemovePoint(index, pointIndex)}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <button
                    className="mobileBtn bg-green-500 text-white py-2 px-4 mt-3 rounded-md"
                     onClick={() => handleAddPoint(index)}
                  >
                    Add Point
                  </button>
                </div>
              </div>
              <button
                className="mobileBtn bg-red-500 text-white py-2 px-4 mt-3 rounded-md"
                onClick={() => handleDeleteMobile(index)}
              >
                Delete Mobile
              </button>
            </div>
          ))}
        </div>
        <div className="bg-slate-100 p-3 my-5 rounded-2xl w-[40rem]">
          <button
            className="my-3 px-4 py-2 bg-green-500 text-white rounded-md"
            onClick={handleAddMobile}
          >
            Add New Mobile
          </button>
        </div>
      </div>
      <div className="edits flex justify-center items-center">
        <button
          onClick={saveData}
          className="px-10 py-2 text-lg text-white font-bold bg-green-500 rounded-2xl mr-10"
        >
          Save
        </button>
        <button
          onClick={closeModel}
          className="px-10 py-2 text-lg text-white font-bold bg-slate-500 rounded-2xl mx-2"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default TopMobilesModel;
