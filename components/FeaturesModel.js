import React, { useState , Context, useContext } from 'react';
import { FeaturesContext } from './Context';


const FeaturesModel = ({ setFeaturesModel }) => {
  const { myfeatures , setMyFeatures } = useContext(FeaturesContext);
  const [featureData, setFeatureData] = useState([...myfeatures]);
  const [newTableName, setNewTableName] = useState('');

  const closeModel = () => {
    setFeaturesModel(false);
  };

  const saveData = () => {
    // Update the features state with the modified data
    setMyFeatures(featureData);
    setFeaturesModel(false);
  };

  const handleRowChange = (e, featureIndex, rowIndex) => {
    const { name, value } = e.target;
    const updatedData = featureData.map((feature, i) => {
      if (i === featureIndex) {
        const newRows = { ...feature.rows };
        newRows[name] = value;
        return {
          ...feature,
          rows: newRows,
        };
      } else {
        return feature;
      }
    });
    setFeatureData(updatedData);
  };

  const handleKeyChange = (e, featureIndex, rowIndex) => {
    const { value } = e.target;
    const updatedData = featureData.map((feature, i) => {
      if (i === featureIndex) {
        const newRows = { ...feature.rows };
        const keys = Object.keys(newRows);
        const updatedKeys = keys.map((key, index) => (index === rowIndex ? value : key));
        const newRowsWithUpdatedKeys = {};
        updatedKeys.forEach((key, index) => {
          newRowsWithUpdatedKeys[key] = newRows[keys[index]];
        });
        return {
          ...feature,
          rows: newRowsWithUpdatedKeys,
        };
      } else {
        return feature;
      }
    });
    setFeatureData(updatedData);
  };

  const handleAddNewRow = (featureIndex) => {
    const updatedData = featureData.map((feature, i) => {
      if (i === featureIndex) {
        return {
          ...feature,
          rows: {
            ...feature.rows,
            enter: 'enter',
          },
        };
      } else {
        return feature;
      }
    });
    setFeatureData(updatedData);
  };

  const handleDeleteRow = (featureIndex, key) => {
    const updatedData = featureData.map((feature, i) => {
      if (i === featureIndex) {
        const newRows = { ...feature.rows };
        delete newRows[key];
        return {
          ...feature,
          rows: newRows,
        };
      } else {
        return feature;
      }
    });
    setFeatureData(updatedData);
  };
  
  const handleFeatureNameChange = (e, featureIndex) => {
    const { value } = e.target;
    const updatedData = featureData.map((feature, i) => {
      if (i === featureIndex) {
        return {
          ...feature,
          name: value,
        };
      } else {
        return feature;
      }
    });
    setFeatureData(updatedData);
  };

  const handleFeatureDescriptionChange = (e, featureIndex) => {
    const { value } = e.target;
    const updatedData = featureData.map((feature, i) => {
      if (i === featureIndex) {
        return {
          ...feature,
          description : value,
        };
      } else {
        return feature;
      }
    });
    setFeatureData(updatedData);
  };

  const handleAddNewTable = () => {
    if (newTableName.trim() !== '') {
      const newTable = {
        name: newTableName.trim(),
        rows: {
          enter: 'enter',
        },
      };
      setFeatureData((prevData) => [...prevData, newTable]);
      setNewTableName('');
    }
  };

  const handleDeleteTable = (featureIndex) => {
    const updatedData = featureData.filter((_, i) => i !== featureIndex);
    setFeatureData(updatedData);
  };

  return (
    <div className="model bg-slate-100 h-full w-full py-10 fixed top-0 backdrop-blur-3xl overflow-y-scroll">
      <div className="w-full flex flex-col rounded-2xl p-10">
      <h1 className='text-3xl font-bold mx-5'>Features</h1>
        {featureData.map((feature, featureIndex) => (
          <div className="bg-slate-100 p-3 my-5 rounded-2xl w-full flex flex-col" key={featureIndex}>
            <input
              value={feature.name}
              onChange={(e) => handleFeatureNameChange(e, featureIndex)}
              className="font-bold text-xl my-2 px-2 py-1 rounded-lg bg-white"
              type="text"
            />
            <textarea
              value={feature.description}
              onChange={(e) => handleFeatureDescriptionChange(e, featureIndex)}
              className="font-bold w-full h-32 text-xl my-5 px-5 py-1 rounded-lg bg-white"
              type="text"
            />
            <table className='w-full h-fit'>
              <tbody className='w-full h-fit' >
                {Object.entries(feature.rows).map(([key, value], rowIndex) => (
                  <tr className={rowIndex % 2 === 0 ? 'bg-white w-full h-fit' : ''} key={rowIndex}>
                    <td className="px-20 py-2">
                      <input
                        value={key}
                        onChange={(e) => handleKeyChange(e, featureIndex, rowIndex)}
                        className="w-full px-2 py-1 rounded-lg bg-white"
                        type="text"
                      />
                    </td>
                    <td className="px-20 py-2">
                      <input
                        value={value}
                        onChange={(e) => handleRowChange(e, featureIndex, rowIndex)}
                        name={key}
                        className="w-full px-2 py-1 rounded-lg bg-white"
                        type="text"
                      />
                    </td>
                    <td className="px-20 py-2">
                      <button
                        className="px-4 py-2 bg-red-500 text-white rounded-md"
                        onClick={() => handleDeleteRow(featureIndex, key)}
                      >
                        Delete Row
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              className="my-3 mx-1 px-4 py-2 bg-green-500 text-white rounded-md"
              onClick={() => handleAddNewRow(featureIndex)}
            >
              Add New Row
            </button>
            <button
              className="my-3 mx-1 px-4 py-2 bg-red-500 text-white rounded-md"
              onClick={() => handleDeleteTable(featureIndex)}
            >
              Delete Table
            </button>
          </div>
        ))}
        <div className="bg-slate-100 p-3 my-5 rounded-2xl w-[40rem]">
          <input
            value={newTableName}
            onChange={(e) => setNewTableName(e.target.value)}
            className="font-bold text-xl my-2 px-2 py-1 rounded-lg bg-white"
            type="text"
            placeholder="Enter Table Name"
          />
          <button
            className="my-3 px-4 py-2 bg-green-500 text-white rounded-md"
            onClick={handleAddNewTable}
          >
            Add New Table
          </button>
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

export default FeaturesModel;
