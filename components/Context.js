"use client"
import React, { createContext, useState } from 'react';

const FeaturesContext = createContext();

const FeaturesProvider = ({ children }) => {
    const [overviewData, setOverviewData] = useState(overview);
    const [detailsData, setDetailsData] = useState(objectDetais);
    const [myfeatures, setMyFeatures] = useState(features);
    const [pros , setPros] = useState(prosData);
    const [cons , setCons] = useState(consData);
    const [buy , setBuy] = useState(buyData);
    const [mobiles , setMobiles] = useState(MobilesData);
    const [compared , setCompared] = useState(MobilesData);

  return (
    <FeaturesContext.Provider value={{ overviewData, setOverviewData , detailsData , setDetailsData , myfeatures , setMyFeatures , pros , setPros , cons , setCons , buy , setBuy , mobiles , setMobiles , compared , setCompared }}>
      {children}
    </FeaturesContext.Provider>
  );
};

export { FeaturesContext, FeaturesProvider };


const overview = {
    image : {
      link : 'https://i.gadgets360cdn.com/products/large/lava-agni-2-5g-lava-db-680x800-1684220775.jpg?downsize=*:180',
      alt : "my mobile",
      title : "my image"  
    },
    data : [ 
        {
            img : ` <svg
            fill="currentColor"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
          >
            <path d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4c0 .667.083 1.167.25 1.5H11a.5.5 0 010 1H5a.5.5 0 010-1h.75c.167-.333.25-.833.25-1.5H2s-2 0-2-2V4zm1.398-.855a.758.758 0 00-.254.302A1.46 1.46 0 001 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 00.538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 00.254-.302 1.464 1.464 0 00.143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757 0 00-.302-.254A1.46 1.46 0 0013.99 3H2c-.325 0-.502.078-.602.145z" />
          </svg>`,
            name : "Display",
            desc : "6.78-inch (2220x2080)"
        },
        {
            img :` <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1em"
            width="1em"
          >
            <path d="M14 9h-4a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1v-4a1 1 0 00-1-1zm-1 4h-2v-2h2zm8 0a1 1 0 000-2h-2V9h2a1 1 0 000-2h-2.18A3 3 0 0017 5.18V3a1 1 0 00-2 0v2h-2V3a1 1 0 00-2 0v2H9V3a1 1 0 00-2 0v2.18A3 3 0 005.18 7H3a1 1 0 000 2h2v2H3a1 1 0 000 2h2v2H3a1 1 0 000 2h2.18A3 3 0 007 18.82V21a1 1 0 002 0v-2h2v2a1 1 0 002 0v-2h2v2a1 1 0 002 0v-2.18A3 3 0 0018.82 17H21a1 1 0 000-2h-2v-2zm-4 3a1 1 0 01-1 1H8a1 1 0 01-1-1V8a1 1 0 011-1h8a1 1 0 011 1z" />
          </svg>`,
            name : "Processor",
            desc : "MediaTek Dimensity 7050"
        },
        {
            img : `<svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            height="1em"
            width="1em"
          >
            <path d="M864 248H728l-32.4-90.8a32.07 32.07 0 00-30.2-21.2H358.6c-13.5 0-25.6 8.5-30.1 21.2L296 248H160c-44.2 0-80 35.8-80 80v456c0 44.2 35.8 80 80 80h704c44.2 0 80-35.8 80-80V328c0-44.2-35.8-80-80-80zm8 536c0 4.4-3.6 8-8 8H160c-4.4 0-8-3.6-8-8V328c0-4.4 3.6-8 8-8h186.7l17.1-47.8 22.9-64.2h250.5l22.9 64.2 17.1 47.8H864c4.4 0 8 3.6 8 8v456zM512 384c-88.4 0-160 71.6-160 160s71.6 160 160 160 160-71.6 160-160-71.6-160-160-160zm0 256c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96z" />
          </svg>`,
            name : "Front Camera",
            desc : "Unspecified"
        },
        {
            img :` <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1em"
            width="1em"
          >
            <path d="M13.73 15l-3.9 6.76a9.984 9.984 0 008.49-2.01l-3.66-6.35M2.46 15c.92 2.92 3.15 5.26 5.99 6.34L12.12 15m-3.58-3l-3.9-6.75A9.855 9.855 0 002 12c0 .68.07 1.35.2 2h7.49m12.11-4h-7.49l.29.5 4.76 8.25A9.93 9.93 0 0022 12c0-.69-.07-1.36-.2-2m-.26-1c-.92-2.93-3.15-5.26-5.99-6.34L11.88 9M9.4 10.5l4.77-8.26C13.47 2.09 12.75 2 12 2c-2.4 0-4.6.84-6.32 2.25l3.66 6.35.06-.1z" />
          </svg>`,
            name : "Rear Camera",
            desc : "50MP"
        },
        {
            img : ` <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1em"
            width="1em"
          >
            <path d="M7.999 22h8c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2h-8c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2zm-5-15h2V5h-2v.5h-1v1h1zm18-2h-2v2h2v-.5h1v-1h-1zm-18 6h2V9h-2v.5h-1v1h1zm18-2h-2v2h2v-.5h1v-1h-1zm-18 6h2v-2h-2v.5h-1v1h1zm18-2h-2v2h2v-.5h1v-1h-1zm-18 6h2v-2h-2v.5h-1v1h1zm18-2h-2v2h2v-.5h1v-1h-1z" />
          </svg>`,
            name : "RAM",
            desc : "8GB"
        },
        {
            img : ` <svg
            baseProfile="tiny"
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1em"
            width="1em"
          >
            <path d="M17 9l-.351.015A5.967 5.967 0 0011 5c-3.309 0-6 2.691-6 6l.001.126A4.007 4.007 0 002 15c0 2.206 1.794 4 4 4h5v-4.586l-1.293 1.293a.997.997 0 01-1.414 0 .999.999 0 010-1.414l2.999-2.999a1 1 0 011.416 0l2.999 2.999a.999.999 0 11-1.414 1.414L13 14.414V19h4c2.757 0 5-2.243 5-5s-2.243-5-5-5z" />
          </svg>`,
            name : "Storage",
            desc : "256GB"
        },
        {
            img : ` <svg
            viewBox="0 0 576 512"
            fill="currentColor"
            height="1em"
            width="1em"
          >
            <path d="M0 176c0-44.2 35.8-80 80-80h384c44.2 0 80 35.8 80 80v16c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32v16c0 44.2-35.8 80-80 80H80c-44.2 0-80-35.8-80-80V176zm80-16c-8.8 0-16 7.2-16 16v160c0 8.8 7.2 16 16 16h384c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H80zm272 32v128H96V192h256z" />
          </svg>`,
            name : "Battery Capacity",
            desc : "4700mAh"
        },
        {
            img : `<svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1em"
            width="1em"
          >
            <path d="M9 9h6v6H9z" />
            <path d="M20 6c0-1.103-.897-2-2-2h-2V2h-2v2h-4V2H8v2H6c-1.103 0-2 .897-2 2v2H2v2h2v4H2v2h2v2c0 1.103.897 2 2 2h2v2h2v-2h4v2h2v-2h2c1.103 0 2-.897 2-2v-2h2v-2h-2v-4h2V8h-2V6zM6 18V6h12l.002 12H6z" />
          </svg>`,
            name : "OS",
            desc : "Android 13"
        } 
    ],
}

const objectDetais = {
    title : "Lava Agni 2 5G Summary",
    description : "Lava Agni 2 5G mobile was launched on 16th May 2023. The phone comes with a 120 Hz refresh rate 6.78-inch touchscreen display offering a resolution of 2220x2080 pixels (FHD+). Lava Agni 2 5G is powered by an octa-core MediaTek Dimensity 7050 processor. It comes with 8GB of RAM. The Lava Agni 2 5G runs Android 13 and is powered by a 4700mAh non-removable battery. The Lava Agni 2 5G supports 66W Fast Charging fast charging."
}



const features = [
    {
        name : "General",
        description : "It is just descritpion",
        rows : {
            "Brand" : "Lava",                                
            "Model" : "Agni 2 5G",                                  
            "Price in India" : "₹21,999",                                  
            "Release date" : "16th May 2023",                                
            "Launched in India" : "Yes",                             
            "Form factor" : "Touchscreen",                               
            "Body type" : "Glass",                                
            "Battery capacity (mAh)" : "4700",                                
            "Removable battery" : "No",                                
            "Fast charging" : "66W Fast Charging",                                
            "Wireless charging" : "No",                                
            "Colours" : "Viridian"
            }
    },
    {
        name : "Display",
        description : "It is just descritpion",
        rows : {
            "Refresh Rate" :"120 Hz",      
            "Resolution Standard" :"FHD+", 
            "Screen size (inches)" :"6.78",
            "Touchscreen" :"Yes",          
            "Resolution" :"2220x2080 pixels"
          }
    },
    {
        name : "Harware",
        description : "",
        rows : {
            "Processor" :"octa-core",                   
            "Processor make" :"MediaTek Dimensity 7050",                   
            "RAM" :"8GB",                   
            "Internal storage" :"256GB"
        }
    },
    {
        name : "Camera",
        description : "",
        rows : {
            "Rear camera" : "50-megapixel",
            "No. of Rear Cameras" : "4",
            "Front camera" : "Unspecified",
            "No. of Front Cameras" : "1"
        }
    },
    {
        name : "Software",
        description : "",
        rows : {
            "Operating system" : "Android 13"
        }
    },
    {
        name : "Connectivity",
        description : "",
        rows : {
            "Wi-Fi" : "Yes",
            "GPS" : "Yes",
            "Bluetooth" : "Yes"
        }
    },
    {
        name : "Sensors",
        description : "",
        rows : {
            "In-Display Fingerprint Sensor" : "Yes"
        }
    }

]

const prosData = [
    "Good battery timing ",
    "Good Camera Result ",
    "Good battery timing "
  ]

const consData = [
    "Bad battery timing ",
    "Bad Camera Result ",
    "Bad battery timing ",
  ]

const buyData = [
  {
    image : "https://i.gadgets360cdn.com/products/large/lava-agni-2-5g-lava-db-680x800-1684220775.jpg?downsize=*:180",
    desc : "adsls dkasdi asdkasjdoi asd",
    StoreImage : "https://pngimg.com/uploads/amazon/amazon_PNG24.png",
    link : "no link"
  },
  {
    image : "https://i.gadgets360cdn.com/products/large/lava-agni-2-5g-lava-db-680x800-1684220775.jpg?downsize=*:180",
    desc : "adsls dkasdi asdkasjdoi asd sadasd asd as",
    StoreImage : "https://pngimg.com/uploads/amazon/amazon_PNG24.png",
    link : "no link"
  }
]

const MobilesData = {
  heading : "Top 5 mobiles",
  mobiles : [
      {
      name : "Samsung",
      image : "https://i.gadgets360cdn.com/products/large/lava-agni-2-5g-lava-db-680x800-1684220775.jpg?downsize=*:180",
      points : [
        "it is good mobile",
        "it is really good mobile",
        "it is really really good mobile",
        "it is really really really good mobile",
      ]
    },
    {
      name : "Iphone",
      image : "https://i.gadgets360cdn.com/products/large/lava-agni-2-5g-lava-db-680x800-1684220775.jpg?downsize=*:180",
      points : [
        "it is good mobile",
        "it is really good mobile",
        "it is really really good mobile",
        "it is really really really good mobile",
      ]
    }
]
}

const ComparedData = [
  {
    name : "Mobile name",
    features : [
          {
              name : "General",
              description : "It is just descritpion",
              rows : {
                  "Brand" : "Lava",                                
                  "Model" : "Agni 2 5G",                                  
                  "Price in India" : "₹21,999",                                  
                  "Release date" : "16th May 2023",                                
                  "Launched in India" : "Yes",                             
                  "Form factor" : "Touchscreen",                               
                  "Body type" : "Glass",                                
                  "Battery capacity (mAh)" : "4700",                                
                  "Removable battery" : "No",                                
                  "Fast charging" : "66W Fast Charging",                                
                  "Wireless charging" : "No",                                
                  "Colours" : "Viridian"
                  }
          },
          {
              name : "Display",
              description : "It is just descritpion",
              rows : {
                  "Refresh Rate" :"120 Hz",      
                  "Resolution Standard" :"FHD+", 
                  "Screen size (inches)" :"6.78",
                  "Touchscreen" :"Yes",          
                  "Resolution" :"2220x2080 pixels"
                }
          },
          {
              name : "Harware",
              description : "",
              rows : {
                  "Processor" :"octa-core",                   
                  "Processor make" :"MediaTek Dimensity 7050",                   
                  "RAM" :"8GB",                   
                  "Internal storage" :"256GB"
              }
          },
          {
              name : "Camera",
              description : "",
              rows : {
                  "Rear camera" : "50-megapixel",
                  "No. of Rear Cameras" : "4",
                  "Front camera" : "Unspecified",
                  "No. of Front Cameras" : "1"
              }
          }
        ]
    },
  {
    name : "Mobile name",
    features : [
          {
              name : "General",
              description : "It is just descritpion",
              rows : {
                  "Brand" : "Lava",                                
                  "Model" : "Agni 2 5G",                                  
                  "Price in India" : "₹21,999",                                  
                  "Release date" : "16th May 2023",                                
                  "Launched in India" : "Yes",                             
                  "Form factor" : "Touchscreen",                               
                  "Body type" : "Glass",                                
                  "Battery capacity (mAh)" : "4700",                                
                  "Removable battery" : "No",                                
                  "Fast charging" : "66W Fast Charging",                                
                  "Wireless charging" : "No",                                
                  "Colours" : "Viridian"
                  }
          },
          {
              name : "Display",
              description : "It is just descritpion",
              rows : {
                  "Refresh Rate" :"120 Hz",      
                  "Resolution Standard" :"FHD+", 
                  "Screen size (inches)" :"6.78",
                  "Touchscreen" :"Yes",          
                  "Resolution" :"2220x2080 pixels"
                }
          },
          {
              name : "Harware",
              description : "",
              rows : {
                  "Processor" :"octa-core",                   
                  "Processor make" :"MediaTek Dimensity 7050",                   
                  "RAM" :"8GB",                   
                  "Internal storage" :"256GB"
              }
          }, 
        ]
    }
   
  ]

