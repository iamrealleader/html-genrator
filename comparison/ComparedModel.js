import React, { useState } from 'react';
import './compared.css'

const ComparedModel = ({ setComapredModel, data, setData }) => {
  const [comparedData, setComparedData] = useState({
    link1: JSON.parse(JSON.stringify(data.link1)),
    link2: JSON.parse(JSON.stringify(data.link2)),
  });
  const [newTableName, setNewTableName] = useState('');

  const closeModel = () => {
    setComapredModel(false);
  };

  const saveData = () => {
    setData({
      link1: comparedData.link1,
      link2: comparedData.link2,
    });
    setComapredModel(false);
  };

  const handleRowChange = (e, featureIndex, rowIndex, link) => {
    const { name, value } = e.target;
    const updatedData = { ...comparedData };
    updatedData[link] = comparedData[link].map((feature, i) => {
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
    setComparedData(updatedData);
  };

  const handleKeyChange = (e, featureIndex, rowIndex, link) => {
    const { value } = e.target;
    const updatedData = { ...comparedData };
    updatedData[link] = comparedData[link].map((feature, i) => {
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
    setComparedData(updatedData);
  };

  const handleAddNewRow = (featureIndex, link) => {
    const updatedData = { ...comparedData };
    updatedData[link] = comparedData[link].map((feature, i) => {
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
    setComparedData(updatedData);
  };

  const handleDeleteRow = (featureIndex, key, link) => {
    const updatedData = { ...comparedData };
    updatedData[link] = comparedData[link].map((feature, i) => {
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
    setComparedData(updatedData);
  };

  const handleFeatureNameChange = (e, featureIndex, link) => {
    const { value } = e.target;
    const updatedData = { ...comparedData };
    updatedData[link] = comparedData[link].map((feature, i) => {
      if (i === featureIndex) {
        return {
          ...feature,
          name: value,
        };
      } else {
        return feature;
      }
    });
    setComparedData(updatedData);
  };

  const handleAddNewTable = () => {
    if (newTableName.trim() !== '') {
      const newTable = {
        name: newTableName.trim(),
        rows: {
          enter: 'enter',
        },
      };
      setComparedData((prevData) => ({
        ...prevData,
        link1: [...prevData.link1, newTable],
        link2: [...prevData.link2, newTable],
      }));
      setNewTableName('');
    }
  };

  const handleDeleteTable = (featureIndex) => {
    const updatedData = { ...comparedData };
    updatedData.link1 = comparedData.link1.filter((_, i) => i !== featureIndex);
    updatedData.link2 = comparedData.link2.filter((_, i) => i !== featureIndex);
    setComparedData(updatedData);
  };

  return (
    <div className='model bg-slate-100 h-full w-full py-10 fixed top-0 backdrop-blur-3xl overflow-y-scroll'>
      <div className='w-full flex flex-col rounded-2xl p-10'>
        <h1 className='text-3xl font-bold mx-5'>Features</h1>
        {comparedData.link1.map((link1Feature, featureIndex) => (
          <div className='feature-table bg-slate-100 py-3 my-5 px-3 md:px-10 rounded-2xl' key={featureIndex}>
            <input
              value={link1Feature.name}
              onChange={(e) => handleFeatureNameChange(e, featureIndex, 'link1')}
              className='font-bold text-xl my-2 px-2 py-1 rounded-lg bg-white'
              type='text'
            />
           
            <table className='w-full'>
              <thead className='feature_heading'>
                <tr>
                  <th>Key</th>
                  <th>Link 1</th>
                  <th>Link 2</th>
                </tr>
              </thead>
              <tbody className='comapredModel_tables w-full'>
                {Object.entries(link1Feature.rows).map(([key, value], rowIndex) => (
                  <tr className={rowIndex % 2 === 0 ? 'bg-white w-full' : ''} key={rowIndex}>
                    <td className='px-2 md:px-10 py-2'>
                      <input
                        value={key}
                        onChange={(e) => handleKeyChange(e, featureIndex, rowIndex, 'link1')}
                        className='w-full px-2 py-1 rounded-lg bg-white'
                        type='text'
                      />
                    </td>
                    <td className='px-2 md:px-10 py-2'>
                      <input
                        value={value}
                        onChange={(e) => handleRowChange(e, featureIndex, rowIndex, 'link1')}
                        name={key}
                        className='w-full px-2 py-1 rounded-lg bg-white'
                        type='text'
                      />
                    </td>
                    <td className='px-2 md:px-10 py-2'>
                      <input
                        value={comparedData.link2[featureIndex].rows[key]}
                        onChange={(e) => handleRowChange(e, featureIndex, rowIndex, 'link2')}
                        name={key}
                        className='w-full px-2 py-1 rounded-lg bg-white'
                        type='text'
                      />
                    </td>
                    <td className='px-2 md:px-10 py-2'>
                      <button
                        className='px-4 py-2 bg-red-500 text-white rounded-md'
                        onClick={() => handleDeleteRow(featureIndex, key, 'link1')}
                      >
                        Delete Row
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              className='my-3 mx-1 px-4 py-2 bg-green-500 text-white rounded-md'
              onClick={() => handleAddNewRow(featureIndex, 'link1')}
            >
              Add New Row
            </button>
            <button
              className='my-3 mx-1 px-4 py-2 bg-red-500 text-white rounded-md'
              onClick={() => handleDeleteTable(featureIndex)}
            >
              Delete Table
            </button>
          </div>
        ))}
        <div className='bg-slate-100 p-3 my-5 rounded-2xl w-[40rem]'>
          <input
            value={newTableName}
            onChange={(e) => setNewTableName(e.target.value)}
            className='font-bold text-xl my-2 px-2 py-1 rounded-lg bg-white'
            type='text'
            placeholder='Enter Table Name'
          />
          <button
            className='my-3 px-4 py-2 bg-green-500 text-white rounded-md'
            onClick={handleAddNewTable}
          >
            Add New Table
          </button>
        </div>
      </div>
      <div className='edits flex justify-center items-center'>
        <button
          onClick={saveData}
          id='editFeatures'
          className='px-10 py-2 text-lg text-white font-bold bg-green-500 rounded-2xl mr-10'
        >
          Save
        </button>
        <button
          onClick={closeModel}
          id='editFeatures'
          className='px-10 py-2 text-lg text-white font-bold bg-slate-500 rounded-2xl mx-2'
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ComparedModel;
