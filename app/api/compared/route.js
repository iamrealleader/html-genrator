import { NextResponse } from "next/server";
import cheerio from 'cheerio';
import https from 'https';

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const link1 = searchParams.get('link1');
    const link2 = searchParams.get('link2');

    try {
      const data1 = await fetchDataFromLink(link1);
      const data2 = await fetchDataFromLink(link2);

      const comparedData = {
        link1: extractFeatureData(data1),
        link2: extractFeatureData(data2),
      };

      return NextResponse.json(comparedData);
    } catch (error) {
      console.error('Error fetching data:', error.message);
      return NextResponse.json({ error: 'Error fetching data' });
    }
  } catch (error) {
    console.error('Error processing request:', error.message);
    return NextResponse.json({ success: false, msg: "Internal Server Error" });
  }
}

async function fetchDataFromLink(link) {
    return new Promise((resolve, reject) => {
      https.get(link, (response) => {
        let data = '';
        response.on('data', (chunk) => {
          data += chunk;
        });
        response.on('end', () => {
          resolve(data);
        });
      }).on('error', (error) => {
        console.error('Error fetching data:', error.message);
        reject(error);
      });
    });
  }
  
  function extractFeatureData(html) {
    const $ = cheerio.load(html);
    const features = [];
  
    // Find all div elements with class "feature-table"
    $('div.feature-table').each((index, element) => {
      // Get the description from the p element with class "feature_p"
      const description = $(element).find('p.feature_p').text().trim();
  
      // Get the table name from the th element in the table's thead
      const name = $(element).find('thead th').text().trim();
  
      const rows = {};
  
      // Extract data from the table rows
      $(element).find('tbody tr').each((index, row) => {
        const key = $(row).find('td:nth-child(1)').text().trim();
        const value = $(row).find('td:nth-child(2)').text().trim();
        rows[key] = value;
      });
  
      features.push({ name, description, rows });
    });
  
    return features;
  }
  
  
  
  
