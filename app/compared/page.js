"use client"
import React, { useState } from 'react';
import Compared from "@comparison/Compared.js"
import ComparedModel from '@comparison/ComparedModel';
import ReactDOMServer from 'react-dom/server';

const ComparisonTable = () => {

  const defaultData = {
    link1: [
      {
        name: 'Features',
        rows: {
          Brand: 'Brand 1',
          Model: 'Model 1',
          Price: '$100',
        },
      },
    ],
    link2: [
      {
        name: 'Features',
        rows: {
          Brand: 'Brand 2',
          Model: 'Model 2',
          Price: '$150',
        },
      },
    ],
  };

  const [ comparedModel , setComapredModel ] = useState(false);
  const [data, setData] = useState(defaultData);
  const [link1, setLink1] = useState('');
  const [link2, setLink2] = useState('');
  const [loading, setLoading] = useState(false);
  const [copiedHtml, setCopiedHtml] = useState('');

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:3000/api/compared?link1=${encodeURIComponent(
          link1
        )}&link2=${encodeURIComponent(link2)}`
      );
      const jsonData = await response.json();
      setData(jsonData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  const copyHtml = () => {
    const comparedHtml = ReactDOMServer.renderToString(<Compared data={data} />);
  
    const fullHtml = `
      <div className='top_container'>
        ${comparedHtml}
      </div>
    `;
  
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = fullHtml;
    document.body.appendChild(tempTextArea);
  
    // Copy the content from the textarea to the clipboard
    tempTextArea.select();
    document.execCommand('copy');
  
    // Remove the temporary textarea element
    document.body.removeChild(tempTextArea);
  
    // Set the copied HTML to the state variable
    setCopiedHtml(fullHtml);
  
    // Reset the copied HTML after 3 seconds
    setTimeout(() => {
      setCopiedHtml('');
    }, 3000);
  };
  

  return (
    <div className="container mx-auto p-4 my-2">
      <div className="flex mb-4 my-10">
        <input
          type="text"
          value={link1}
          onChange={(e) => setLink1(e.target.value)}
          placeholder="Enter Link 1"
          className="p-2 border border-gray-300 rounded-l-md w-full focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          value={link2}
          onChange={(e) => setLink2(e.target.value)}
          placeholder="Enter Link 2"
          className="p-2 border border-gray-300 rounded-r-md w-full focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={fetchData}
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md ml-2 focus:outline-none"
        >
          Compare
        </button>
      </div>
      <div className="Compared_container">
      {loading ? (
        <div className="text-center font-bold text-2xl p-10">Loading...</div>
      ) : (
        <Compared data={data} />
        
      )}

      <div className="flex  justify-center items-center">
            <div className="edits flex justify-center items-center my-2">
              <button onClick={ () => setComapredModel(true) } id='editFeatures' className='px-10 py-2 text-lg text-white font-bold bg-yellow-400 rounded-2xl mx-10 '>Edit</button>
            </div>
            <button onClick={copyHtml} id='editOverview' className='px-10 py-2 text-lg text-white font-bold bg-blue-400 rounded-2xl mx-10'>
              {copiedHtml ? 'Copied!' : 'Copy HTML'}
            </button>   
          </div>
    </div>
    <div className="compared_model_container">
        { comparedModel &&  <ComparedModel setComapredModel={setComapredModel} data={data} setData={setData}  /> }
    </div>
      
    </div>
  );
};

export default ComparisonTable;

