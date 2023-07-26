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
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
        html{
          scroll-behavior: smooth;
          scroll-padding-top: 6rem;
          }
          
          .feature-table{
              min-width: 50rem;
              max-width : fit-content;
          }
        .mylinks {
          font-weight: 600;
          font-size: 1.125rem;
          margin-bottom: 1rem;
        }

        .scroll-smooth {
          scroll-behavior: smooth;
        }

        .mb-16 {
          margin-bottom: 4rem;
        }

        .text-lg {
          font-size: 1.125rem;
        }

        .flex {
          display: flex;
        }
        .top-0{
          top: 0px;
        }
        .left-0{
          left: 0px;
        }

        .w-full {
          width: 100%;
        }

        .fixed {
          position: fixed;
        }

        .py-5 {
          padding-top: 1.25rem;
          padding-bottom: 1.25rem;
        }

        /* Additional missing classes from the source code */

        /* Component 1 specific styles */
        .p-3 {
          padding: 0.75rem;
        }

        .py-5 {
          padding-top: 1.25rem;
          padding-bottom: 1.25rem;
        }

        .px-10 {
          padding-left: 2.5rem;
          padding-right: 2.5rem;
        }

        .bg-slate-100 {
          background-color: #f7fafc;
        }

        .rounded-2xl {
          border-radius: 1rem;
        }

        .w-10 {
          width: 2.5rem;
        }

        .mx-2 {
          margin-left: 0.5rem;
          margin-right: 0.5rem;
        }

        .details {
          margin: 0.5rem 0;
        }

        .my-2 {
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
        }

        .text-2xl {
          font-size: 1.5rem;
        }

        /* Component 2 specific styles */
        .m-10 {
          margin: 2.5rem;
        }

        .my-5 {
          margin-top: 1.25rem;
          margin-bottom: 1.25rem;
        }

        .py-3 {
          padding-top: 0.75rem;
          padding-bottom: 0.75rem;
        }

        .px-10 {
          padding-left: 2.5rem;
          padding-right: 2.5rem;
        }

        .rounded-2xl {
          border-radius: 1rem;
        }

        .text-3xl {
          font-size: 1.875rem;
        }

        .font-bold {
          font-weight: 700;
        }

        .my-2 {
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
        }

        .text-xl {
          font-size: 1.25rem;
        }

        .my-5 {
          margin-top: 1.25rem;
          margin-bottom: 1.25rem;
        }

        .py-10 {
          padding-top: 2.5rem;
          padding-bottom: 2.5rem;
        }

        .w-full {
          width: 100%;
        }

        .flex {
          display: flex;
        }

        /* Component 3 specific styles */
        .mx-3 {
          margin-left: 0.75rem;
          margin-right: 0.75rem;
        }

        .my-5 {
          margin-top: 1.25rem;
          margin-bottom: 1.25rem;
        }

        .mx-10 {
          margin-left: 2.5rem;
          margin-right: 2.5rem;
        }

        .py-2 {
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
        }

        .py-3 {
          padding-top: 0.75rem;
          padding-bottom: 0.75rem;
        }

        .w-40 {
          width: 10rem;
        }

        /* Additional custom styles */
        /* Add your custom styles here if needed */


        .px-20 {
          padding-left: 5rem;
          padding-right: 5rem;
        }

        .bg-white {
          background-color: #fff;
        }

        .shadow-lg {
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .border-b-2 {
          border-bottom-width: 2px;
        }

        .hover:text-orange-400:hover {
          color: #f97316;
        }

        .px-6 {
          padding-left: 1.5rem;
          padding-right: 1.5rem;
        }

        /* Component 1 specific styles */
        .overview-image {
          width: 15rem;
          height: 100vh;
        }

        .ok {
          flex: 1;
        }

        /* Component 2 specific styles */
        .tool-overview {
          margin: 2.5rem;
        }

        .feature-table {
          min-width: 50rem;
          max-width: fit-content;
          background-color: #f0f4f8;
          padding: 1.875rem 2.5rem;
          border-radius: 1rem;
        }

        /* Component 3 specific styles */
        .details {
          margin: 0.5rem 0;
        }

        .text-xl {
          font-size: 1.75rem;
        }

        /* Additional styles for Component 2 and Component 3 */
        #features,
        #details {
          margin: 2.5rem;
        }

        .my-2 {
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
        }

        .text-2xl {
          font-size: 2rem;
        }

        .flex-wrap {
          flex-wrap: wrap;
        }

        .p-6 {
          padding: 1.5rem;
        }

        .gap-10 {
          gap: 2.5rem;
        }
        .p-10{
          padding: 20px;
        }

        .rounded-2xl {
          border-radius: 1rem;
        }

        .justify-start {
          justify-content: flex-start;
        }

        .items-start {
          align-items: flex-start;
        }

        .w-10 {
          width: 2.5rem;
        }

        .mx-2 {
          margin-left: 0.5rem;
          margin-right: 0.5rem;
        }

        .text-center {
          text-align: center;
        }

        .w1 {
          width: 1px;
        }

        .h-10 {
          height: 2.5rem;
        }

        .bg-slate-100 {
          background-color: #f7fafc;
        }

        .flex-col {
          flex-direction: column;
        }

        .font-bold {
          font-weight: 700;
        }

        .px-2 {
          padding-left: 0.5rem;
          padding-right: 0.5rem;
        }

        .py-3 {
          padding-top: 0.75rem;
          padding-bottom: 0.75rem;
        }

        .w-72 {
          width: 18rem;
        }

        .bg-red-500 {
          background-color: #f56565;
        }

        .text-white {
          color: #fff;
        }

        .my-3 {
          margin-top: 0.75rem;
          margin-bottom: 0.75rem;
        }

        .px-4 {
          padding-left: 1rem;
          padding-right: 1rem;
        }

        .py-2 {
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
        }

        .bg-green-500 {
          background-color: #48bb78;
        }

        .mx-10 {
          margin-left: 2.5rem;
          margin-right: 2.5rem;
        }

        .rounded-md {
          border-radius: 0.375rem;
        }

        .font-bold {
          font-weight: 700;
        }

        .bg-yellow-400 {
          background-color: #f6e05e;
        }

        .generate-html {
          padding: 2.5rem 5rem;
        }

        .bg-blue-600 {
          background-color: #2563eb;
        }

        .edits {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* Additional styles for Component 3 */
        .my-5 {
          margin-top: 1.25rem;
          margin-bottom: 1.25rem;
        }

        .m-5 {
          margin: 2rem;
        }

        /* Additional styles for links */
        a {
          color: #000;
          text-decoration: none;
        }

        a:hover {
          color: #f97316;
        }

        .justify-center{
          justify-content: center;
        }
        .items-center{
          align-items: center;
        }
        .p-5{
          padding: 1.25rem;
        }
        .p-2{
          padding : 0.75rem;
        }
        .mx-16{
          margin-left: 5rem;
          margin-right: 5rem;
        }

        

        .feature-table{
              min-width: 50rem;
              max-width : fit-content;
          }

          @media Screen and (max-width : 1000px) {
              .feature-table{
                  min-width: 95%;
                  max-width : fit-content;
                  padding: 15px;
              }
              .overview-img-top{
                flex-direction: column;
              }
              .overview-img {
                position: static;
                display: block;
              }
              .overview-image{
                width: 100vw;
                height: fit-content;
              }
              .overview-links{
                padding: 10px 0px !important;
              }
              .tool-overview{
                margin: 2px !important;
              }
              .release{
                margin: 0rem 1rem ;
              }
              .details{
                margin: 0px !important;
                padding: 10px;
              }
            }
        </style>
      </head>
      <body>
        <div class="mylinks scroll-smooth font-bold mb-16 text-lg flex w-full">
          <div class="overview-links fixed top-0 left-0 w-full py-5 px-20 bg-white shadow-lg border-b-2 ">
            <a class='hover:text-orange-400 px-6' href="#overview">Overview</a>
            <a class='hover:text-orange-400 px-6' href="#details">Details</a>
            <a class='hover:text-orange-400 px-6' href="#features">Features</a>
          </div>
        </div>
        <div class='overview-img-top flex'>
          <div class="overview-image w-[30rem] h-[100vh]">
            <img class='overview-img w-40 m-5 fixed' src=${featuresContext.overviewData.image} alt="Mobile picture" />
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
        <div className="fixed top-0 left-0 w-full py-5 px-4 md:px-20 bg-white shadow-lg border-b-2 ">
          <a className='hover:text-orange-400 px-6' href="/#overview">Overview</a>
          <a className='hover:text-orange-400 px-6' href="/#details">Details</a>
          <a className='hover:text-orange-400 px-6' href="/#features">Features</a>
        </div>
      </div>
      <div className='flex flex-col md:flex-row'>
        <div className="h-fit w-full md:w-[30rem] md:h-[100vh]">
            <img className='w-40 m-5 block md:fixed' src={featuresContext.overviewData.image} alt="Mobile picture" />
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
