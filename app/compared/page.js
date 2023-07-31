"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import cheerio from 'cheerio';

const page = () => {
  const [postLinks, setPostLinks] = useState('');
  const [comparedData, setComparedData] = useState([]);

  useEffect(() => {
    if (postLinks) {
      const linksArray = postLinks.split(',').map(link => link.trim());
      const fetchData = async () => {
        try {
          const postData = await Promise.all(linksArray.map(link => axios.get(link)));
          const extractedData = postData.map(post => extractFeaturesFromHTML(post.data));
          const combinedData = combineExtractedData(extractedData);
          setComparedData(combinedData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData();
    }
  }, [postLinks]);

  const extractFeaturesFromHTML = (htmlContent) => {
    const $ = cheerio.load(htmlContent);
    const featureDiv = $('#features');

    // Extract data from the feature div
    const features = featureDiv.find('.feature').map((index, element) => {
      const name = $(element).find('.feature-name').text();
      const description = $(element).find('.feature-description').text();

      // Extract rows data
      const rows = {};
      $(element).find('.feature-row').each((i, rowElement) => {
        const key = $(rowElement).find('.row-key').text();
        const value = $(rowElement).find('.row-value').text();
        rows[key] = value;
      });

      return { name, description, rows };
    }).get();

    return { features };
  };

  const combineExtractedData = (extractedData) => {
    // Combine the extracted data into the format you provided in ComparedData context state
    return extractedData.map(data => ({
      name: data.name, // Add the name of the WordPress post if available
      features: data.features,
    }));
  };

  return (
    <div>
        <div className="navigator_links m-5 flex justify-center items-center shadow-lg py-2">
          <a className='mx-2 font-bold ' href="/">Home</a>
          <a className='mx-2 font-bold ' href="/compared">Compared</a>
        </div>
      <h1>Comparison Table</h1>
      <div>
        <label htmlFor="postLinks">Enter WordPress Post Links (separated by commas):</label>
        <input
          type="text"
          id="postLinks"
          value={postLinks}
          onChange={(e) => setPostLinks(e.target.value)}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            {comparedData.map((data, index) => (
              <th key={index}>{data.name || `Post ${index + 1}`}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {comparedData.length > 0 &&
            comparedData[0].features.map((feature, index) => (
              <tr key={index}>
                <td>{feature.name}</td>
                {comparedData.map((data, dataIndex) => (
                  <td key={dataIndex}>{feature.rows[dataIndex]}</td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default page;

