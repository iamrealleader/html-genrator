import React, { createContext, useState } from 'react';

const FeaturesContext = createContext();

const FeaturesProvider = ({ children }) => {
    const [overviewData, setOverviewData] = useState(overview);
    const [detailsData, setDetailsData] = useState(objectDetais);
    const [myfeatures, setMyFeatures] = useState(features);

  return (
    <FeaturesContext.Provider value={{ overviewData, setOverviewData , detailsData , setDetailsData , myfeatures , setMyFeatures }}>
      {children}
    </FeaturesContext.Provider>
  );
};

export { FeaturesContext, FeaturesProvider };


const overview = {
    image : 'https://i.gadgets360cdn.com/products/large/lava-agni-2-5g-lava-db-680x800-1684220775.jpg?downsize=*:180',
    data : [ 
        {
            img : "https://cdn-icons-png.flaticon.com/128/2633/2633329.png",
            name : "Display",
            desc : "6.78-inch (2220x2080)"
        },
        {
            img : "https://cdn-icons-png.flaticon.com/128/2633/2633329.png",
            name : "Processor",
            desc : "MediaTek Dimensity 7050"
        },
        {
            img : "https://cdn-icons-png.flaticon.com/128/2633/2633329.png",
            name : "Front Camera",
            desc : "Unspecified"
        },
        {
            img : "https://cdn-icons-png.flaticon.com/128/2633/2633329.png",
            name : "Rear Camera",
            desc : "50MP"
        },
        {
            img : "https://cdn-icons-png.flaticon.com/128/2633/2633329.png",
            name : "RAM",
            desc : "8GB"
        },
        {
            img : "https://cdn-icons-png.flaticon.com/128/2633/2633329.png",
            name : "Storage",
            desc : "256GB"
        },
        {
            img : "https://cdn-icons-png.flaticon.com/128/2633/2633329.png",
            name : "Battery Capacity",
            desc : "4700mAh"
        },
        {
            img : "https://cdn-icons-png.flaticon.com/128/2633/2633329.png",
            name : "OS",
            desc : "Android 13"
        } 
    ],
    
    status : "Released",
    date : "16th May 2023"
}

const objectDetais = {
    title : "Lava Agni 2 5G Summary",
    description : "Lava Agni 2 5G mobile was launched on 16th May 2023. The phone comes with a 120 Hz refresh rate 6.78-inch touchscreen display offering a resolution of 2220x2080 pixels (FHD+). Lava Agni 2 5G is powered by an octa-core MediaTek Dimensity 7050 processor. It comes with 8GB of RAM. The Lava Agni 2 5G runs Android 13 and is powered by a 4700mAh non-removable battery. The Lava Agni 2 5G supports 66W Fast Charging fast charging."
}



const features = [
    {
        name : "General",
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
        rows : {
            "Processor" :"octa-core",                   
            "Processor make" :"MediaTek Dimensity 7050",                   
            "RAM" :"8GB",                   
            "Internal storage" :"256GB"
        }
    }

]


