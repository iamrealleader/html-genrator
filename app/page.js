"use client"


import { useContext, useState } from 'react';
import { FeaturesContext, FeaturesProvider } from '@components/Context';
import Overview from '@/components/Overview';
import Features from '@/components/Features';
import Details from '@components/Details';
import Pros from '@components/Pros';
import OverviewModel from '@components/OverviewModel';
import FeaturesModel from '@components/FeaturesModel';
import DetailsModel from '@components/DetailsModel';
import ProsModel from '@components/ProsModel';
import ReactDOMServer from 'react-dom/server';
import FileSaver from 'file-saver';

const Home = () => {
  const featuresContext = useContext(FeaturesContext);
  const { myfeatures } =  useContext(FeaturesContext);
  const [overviewModel, setOverviewModel] = useState(false);
  const [detailsModel, setDetailsModel] = useState(false);
  const [featuresModel, setFeaturesModel] = useState(false);
  const [prosModel, setProsModel] = useState(false);

  const editOverview = () => {
    setOverviewModel(true);
  };

  const editDetails = () => {
    setDetailsModel(true);
  };

  const editFeatures = () => {
    setFeaturesModel(true);
  };

  const editPros = () => {
    setProsModel(true);
  };

  const generateHtml = (e) => {
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
    const prosHtml = ReactDOMServer.renderToString(
      <FeaturesContext.Provider value={featuresContext}>
        <Pros />
      </FeaturesContext.Provider>
    );

    // Combine the HTML content of the components
    const fullHtml = `
    <html>
      <head>
        <title>Generated HTML</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style> 

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
          width: 100%;
          background-color: #f0f4f8;
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

        .relative{
          position : relative;
        }
        .w1 {
          width: 1px;
        }

        .top_container{
          width: 80%;
        }
        .overview_top_container{
          display: flex;
          justify-content: center;
          border: 3px solid black;
          margin: 5px;
          padding: 10px;
        }
        .overview_img_container{
          width: 20rem;
          padding: 1rem;
        }
        .overview_left_img{
          width: 100%;
        }
        .Overview_container{
          width: 100%;
        }

        .overview_middle_container{
          padding: 10px;
        }
        .feature_heading{
          font-weight: 700;
          font-size: 2rem;
          margin: 20px;
        }
        .feature_p{
          margin: 10px;
          
        }
        .pros{
          width: 100%;
          display : flex;
          justify-content: center;
        }
      
       .pros_h1{
        width: 100%;
        background-color: rgb(175, 255, 56);
        font-size: 2rem;
        font-weight: 900;
        text-align: center;
        padding: 10px;
       }
       .cons_h1{
        width: 100%;
        background-color: rgb(255, 14, 14);
        font-size: 2rem;
        font-weight: 900;
        text-align: center;
        padding: 10px;
       }
       
      .pros_values , .cons_values{
        margin: 50px 10px;
        width: 100%;
        display: flex;
        flex-direction: column;
        flex: 1;
        justify-content: start;
        align-items: center;
        font-size: 1.3rem;
        font-weight: 500;
        padding: 5px 20px;
      }
      .pros_values{
        border: 2px solid green;
      }
      .cons_values{
        border: 2px solid red;
      }
      
      .pros_container , .cons_container {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .pros_svg_icon , .cons_svg_icon {
        color: green;
        margin: 0px 3px;
      }
      .pros_svg_icon{
        color: green;
        font-size: 2rem;
        font-weight: 900;
      }
      .cons_svg_icon{
        color: red;
        font-size: 1.5rem;
      }
      
      .overview_icons{
        font-size: 4rem;
        margin: 5px 5px 0px 5px;
       }
      .overview_name{
        font-weight: 100;
        font-size: 14px;
      }
      .overview_description{
        font-weight: 900;
        font-size: 16px;
      }
      .overview_line{
        width: 1px;
        height: 40px;
        margin: 0px 20px;
        background-color: black;
      }
      .m-1{
        margin: 3px;
      }
      .Overview_top_heading{
        width: fit-content;
        font-size: 2rem;
        font-weight: 900;
        padding: 0px 10px;
        background-color: black;
        color: white;
        text-align: center;
        margin: 5px 0px;
      }
      .Overview_line_container{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
      }
      .overview_bottom_line{
        width: 100%;
        height: 1px;
        background-color: rgb(200, 194, 194);
        margin: 10px 0px;
      }
      .overview_main_conatiner{
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        background-color: white;
        padding: 15px;
      }

          @media screen and (max-width : 1000px) {
              .feature-table{
                  min-width: 95%;
                  max-width : fit-content;
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
              .top_container{
                  width: 100%;
                }
                .overview_img_container{
                  width: 10rem;
                  padding: 0.5rem;
                }
                .Overview_container{
                  width: 60%;
                }
                .overview_middle_container{
                  padding: 0px;
                }
                .pros{
                  flex-direction: column;
                  width: 90%;
                  gap: 0px;
                }
                .pros_values , .cons_values{
                  padding: 5px;
                  margin: 10px;
                }
                .overview_icons{
                  font-size: 2rem;
                  margin: 5px 5px 0px 5px;
                 }
                 .overview_line{
                  margin: 0px 10px;
                }
                .Overview_top_heading{
                  font-size: 1.5rem;
                }
                .overview_main_conatiner{
                  gap: 5px;
                  padding: 5px;
                }
                          }
        </style>
      </head>
      <body>
    <div class='top_container'>
      <div class="overview_top_container">
          <div class="overview_img_container">
              <img class='overview_left_img' src=${featuresContext.overviewData.image} alt="Mobile picture" />
          </div>
            ${overviewHtml}
      </div>
            ${detailsHtml}
            ${featuresHtml}
            ${prosHtml}
   </div>
        <!-- Add any other custom HTML content here -->
      </body>
    </html>
  `;
  

    // Create a Blob with the HTML content and generate a URL for the blob
    const blob = new Blob([fullHtml], { type: 'text/html' });

    // Use FileSaver.js to save the generated HTML as a file
    FileSaver.saveAs(blob, 'generated_html.html');
    e.target.innerHTML = "Done";
      setTimeout(() => {
        e.target.innerHTML = "Generate Html";
      }, 3000);
  };

  
  const copyHtml = (e) => {
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
    const prosHtml = ReactDOMServer.renderToString(
      <FeaturesContext.Provider value={featuresContext}>
        <Pros />
      </FeaturesContext.Provider>
    );

    // Combine the HTML content of the components
    const fullHtml = `
    <html>
      <head>
        <title>Generated HTML</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body>
    <div class='top_container'>
      <div class="overview_top_container">
          <div class="overview_img_container">
              <img class='overview_left_img' src=${featuresContext.overviewData.image} alt="Mobile picture" />
          </div>
        
            ${overviewHtml}
            </div>
            ${detailsHtml}
            ${featuresHtml}
            ${prosHtml}
    </div>
      </body>
    </html>
  `;
  
      

  const tempTextArea = document.createElement('textarea');
  tempTextArea.value = fullHtml;
  document.body.appendChild(tempTextArea);

  // Copy the content from the textarea to the clipboard
  tempTextArea.select();
  document.execCommand('copy');

  // Remove the temporary textarea element
  document.body.removeChild(tempTextArea);
  e.target.innerHTML = "Done";
      setTimeout(() => {
        e.target.innerHTML = "Copy Html";
      }, 3000);
  };


  const copyOverviewHtml = (e) => {
    // Render the components to static markup
    const overviewHtml = ReactDOMServer.renderToString(
      <FeaturesContext.Provider value={featuresContext}>
        <Overview />
      </FeaturesContext.Provider>
    );
   

    // Combine the HTML content of the components
    const fullHtml = `
    <html>
      <head>
        <title>Generated HTML</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body>
    <div class='top_container'>
      <div class="overview_top_container">
          <div class="overview_img_container">
              <img class='overview_left_img' src=${featuresContext.overviewData.image} alt="Mobile picture" />
          </div>
            ${overviewHtml}
      </div>
    </div>
      </body>
    </html>
  `;

  const tempTextArea = document.createElement('textarea');
  tempTextArea.value = fullHtml;
  document.body.appendChild(tempTextArea);

  // Copy the content from the textarea to the clipboard
  tempTextArea.select();
  document.execCommand('copy');

  // Remove the temporary textarea element
  document.body.removeChild(tempTextArea);
  e.target.innerHTML = "Done";
      setTimeout(() => {
        e.target.innerHTML = "Copy Html";
      }, 3000);
  };

  const copyDetailsHtml = (e) => {
    const detailsHtml = ReactDOMServer.renderToString(
      <FeaturesContext.Provider value={featuresContext}>
        <Details />
      </FeaturesContext.Provider>
    );
    
    const fullHtml = `
    <html>
      <head>
        <title>Generated HTML</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body>
    <div class='top_container'>
            ${detailsHtml}
      </div>
      </body>
    </html>
  `;
  const tempTextArea = document.createElement('textarea');
  tempTextArea.value = fullHtml;
  document.body.appendChild(tempTextArea);

  // Copy the content from the textarea to the clipboard
  tempTextArea.select();
  document.execCommand('copy');

  // Remove the temporary textarea element
  document.body.removeChild(tempTextArea);
  e.target.innerHTML = "Done";
      setTimeout(() => {
        e.target.innerHTML = "Copy Html";
      }, 3000);
  }
  const copyFeaturesHtml = (e) => {
    const featuresHtml = ReactDOMServer.renderToString(
      <FeaturesContext.Provider value={featuresContext}>
        <Features />
      </FeaturesContext.Provider>
    );
    const fullHtml = `
    <html>
      <head>
        <title>Generated HTML</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body>
    <div class='top_container'>
            ${featuresHtml}
      </div>
      </body>
    </html>
  `;
  const tempTextArea = document.createElement('textarea');
  tempTextArea.value = fullHtml;
  document.body.appendChild(tempTextArea);

  // Copy the content from the textarea to the clipboard
  tempTextArea.select();
  document.execCommand('copy');

  // Remove the temporary textarea element
  document.body.removeChild(tempTextArea);
  e.target.innerHTML = "Done";
      setTimeout(() => {
        e.target.innerHTML = "Copy Html";
      }, 3000);
  }

  const copyProsHtml = (e) => {
    const prosHtml = ReactDOMServer.renderToString(
      <FeaturesContext.Provider value={featuresContext}>
        <Pros />
      </FeaturesContext.Provider>
    );

    const fullHtml = `
    <html>
      <head>
        <title>Generated HTML</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body>
    <div class='top_container'>
            ${prosHtml}
      </div>
      </body>
    </html>
  `;
  const tempTextArea = document.createElement('textarea');
  tempTextArea.value = fullHtml;
  document.body.appendChild(tempTextArea);

  // Copy the content from the textarea to the clipboard
  tempTextArea.select();
  document.execCommand('copy');

  // Remove the temporary textarea element
  document.body.removeChild(tempTextArea);
  e.target.innerHTML = "Done";
      setTimeout(() => {
        e.target.innerHTML = "Copy Html";
      }, 3000);
  }

  return (
    <>
      <div className='top_container'>
        <div className="overview_top_container">
            <div className="overview_img_container">
                <img className='overview_left_img' src={featuresContext.overviewData.image} alt="Mobile picture" />
            </div>
            <Overview/>
        </div>
          <div className="flex  justify-center items-center">
            <div className="edits flex justify-center items-center my-2">
              <button onClick={editOverview} id='editOverview' className='px-10 py-2 text-lg text-white font-bold bg-yellow-400 rounded-2xl mx-10 '>Edit</button>
            </div>
            <div className="edits flex justify-center items-center my-2">
              <button onClick={copyOverviewHtml} id='editOverview' className='px-10 py-2 text-lg text-white font-bold bg-blue-400 rounded-2xl mx-10 '>Copy html</button>
            </div>   
          </div>

          <Details/>
          <div className="flex  justify-center items-center">
            <div className="edits flex justify-center items-center my-2">
              <button onClick={editDetails} id='editDetils' className='px-10 py-2 text-lg text-white font-bold bg-yellow-400 rounded-2xl mx-10 '>Edit</button>
            </div>
            <div className="edits flex justify-center items-center my-2">
              <button onClick={copyDetailsHtml} id='editOverview' className='px-10 py-2 text-lg text-white font-bold bg-blue-400 rounded-2xl mx-10 '>Copy html</button>
            </div>   
          </div>

          <Features/>
          <div className="flex  justify-center items-center">
            <div className="edits flex justify-center items-center my-2">
              <button onClick={editFeatures} id='editFeatures' className='px-10 py-2 text-lg text-white font-bold bg-yellow-400 rounded-2xl mx-10 '>Edit</button>
            </div>
            <div className="edits flex justify-center items-center my-2">
              <button onClick={copyFeaturesHtml} id='editOverview' className='px-10 py-2 text-lg text-white font-bold bg-blue-400 rounded-2xl mx-10 '>Copy html</button>
            </div>   
          </div>


          <Pros/>
         
          <div className="flex  justify-center items-center">
            <div className="edits flex justify-center items-center my-2">
              <button onClick={editPros} id='editFeatures' className='px-10 py-2 text-lg text-white font-bold bg-yellow-400 rounded-2xl mx-10 '>Edit</button>
            </div>
            <div className="edits flex justify-center items-center my-2">
              <button onClick={copyProsHtml} id='editOverview' className='px-10 py-2 text-lg text-white font-bold bg-blue-400 rounded-2xl mx-10 '>Copy html</button>
            </div>   
          </div>

        { overviewModel && <OverviewModel setOverviewModel={setOverviewModel}  />}
        { detailsModel && <DetailsModel setDetailsModel={setDetailsModel}  />}
        { featuresModel && <FeaturesModel setFeaturesModel={setFeaturesModel}  />}
        { prosModel && <ProsModel setProsModel={setProsModel}  />}
      </div>

      {/* generate html  */}
      <br />
      <hr />
      <div className="edits my-5 flex justify-center items-center">
        <button
          onClick={generateHtml}
          id="editFeatures"
          className="px-10 py-2 text-lg text-white font-bold bg-green-600 rounded-2xl mx-10"
        >
          Generate HTML
        </button>

        <button
          onClick={copyHtml}
          id="editFeatures"
          className="px-10 py-2 text-lg text-white font-bold bg-blue-600 rounded-2xl mx-10"
        >
          Copy HTML
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

