"use client"

import { useContext, useState } from 'react';
import { FeaturesContext, FeaturesProvider } from '@components/Context';
import Overview from '@/components/Overview';
import Features from '@/components/Features';
import Details from '@components/Details';
import OverviewModel from '@components/OverviewModel';
import FeaturesModel from '@components/FeaturesModel';
import DetailsModel from '@components/DetailsModel';
import ReactDOMServer from 'react-dom/server';
import FileSaver from 'file-saver';

const Home = () => {
  const featuresContext = useContext(FeaturesContext);
  const [overviewModel, setOverviewModel] = useState(false);
  const [detailsModel, setDetailsModel] = useState(false);
  const [featuresModel, setFeaturesModel] = useState(false);

  const editOverview = () => {
    setOverviewModel(true);
  };

  const editDetails = () => {
    setDetailsModel(true);
  };

  const editFeatures = () => {
    setFeaturesModel(true);
  };

  const generateHtml = () => {
    // Render the components to static markup
    const overviewHtml = ReactDOMServer.renderToString(
      <FeaturesContext.Provider value={featuresContext}>
        <Overview />
      </FeaturesContext.Provider>
    );
    const detailsHtml = ReactDOMServer.renderToString(
      <FeaturesContext.Provider value={featuresContext}>
        <Details />
      </FeaturesContext.Provider>
    );
    const featuresHtml = ReactDOMServer.renderToString(
      <FeaturesContext.Provider value={featuresContext}>
        <Features />
      </FeaturesContext.Provider>
    );

    // Combine the HTML content of the components
    const fullHtml = `
    <html>
      <head>
        <title>Generated HTML</title>
        <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
      </head>
      <body>
        <div class="mylinks scroll-smooth font-bold mb-16 text-lg flex w-full">
          <div class="fixed w-full py-5 px-20 bg-white shadow-lg border-b-2 ">
            <a class='hover:text-orange-400 px-6' href="/#overview">Overview</a>
            <a class='hover:text-orange-400 px-6' href="/#details">Details</a>
            <a class='hover:text-orange-400 px-6' href="/#features">Features</a>
          </div>
        </div>
        <div class='flex'>
          <div class="w-[30rem] h-[100vh]">
            <img class='w-40 m-5 fixed' src=${featuresContext.overviewData.image} alt="Mobile picture" />
          </div>
          <div class='ok'>
            ${overviewHtml}
            ${detailsHtml}
            ${featuresHtml}
          </div>
        </div>
  
        <!-- Add any other custom HTML content here -->
      </body>
    </html>
  `;
  

    // Create a Blob with the HTML content and generate a URL for the blob
    const blob = new Blob([fullHtml], { type: 'text/html' });

    // Use FileSaver.js to save the generated HTML as a file
    FileSaver.saveAs(blob, 'generated_html.html');
  };

  return (
    <>
      <div className="mylinks scroll-smooth font-bold mb-16 text-lg flex w-full">
        <div className="fixed w-full py-5 px-20 bg-white shadow-lg border-b-2 ">
          <a className='hover:text-orange-400 px-6' href="/#overview">Overview</a>
          <a className='hover:text-orange-400 px-6' href="/#details">Details</a>
          <a className='hover:text-orange-400 px-6' href="/#features">Features</a>
        </div>
      </div>
      <div className='flex'>
        <div className="w-[30rem] h-[100vh]">
            <img className='w-40 m-5 fixed' src={featuresContext.overviewData.image} alt="Mobile picture" />
        </div>
        <div className='ok'>
          <Overview/>
          <div className="edits flex justify-center items-center my-2">
            <button onClick={editOverview} id='editOverview' className='px-10 py-2 text-lg text-white font-bold bg-yellow-400 rounded-2xl mx-10 '>Edit</button>
          </div>

          <Details/>
          <div className="edits flex justify-center items-center my-2">
            <button onClick={editDetails} id='editDetils' className='px-10 py-2 text-lg text-white font-bold bg-yellow-400 rounded-2xl mx-10 '>Edit</button>
          </div>

          <Features/>
          <div className="edits flex justify-center items-center my-2">
            <button onClick={editFeatures} id='editFeatures' className='px-10 py-2 text-lg text-white font-bold bg-yellow-400 rounded-2xl mx-10 '>Edit</button>
          </div>
        </div>
        { overviewModel && <OverviewModel setOverviewModel={setOverviewModel}  />}
        { detailsModel && <DetailsModel setDetailsModel={setDetailsModel}  />}
        { featuresModel && <FeaturesModel setFeaturesModel={setFeaturesModel}  />}
      </div>

      {/* generate html  */}
      <br />
      <hr />
      <div className="edits my-5 flex justify-center items-center">
        <button
          onClick={generateHtml}
          id="editFeatures"
          className="px-10 py-2 text-lg text-white font-bold bg-blue-600 rounded-2xl mx-10"
        >
          Generate HTML
        </button>
      </div>
    </>
  );
};

export default function App() {
  return (
    <FeaturesProvider>
      <Home />
    </FeaturesProvider>
  );
}
