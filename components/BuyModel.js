import React, { useState, useContext } from 'react';
import { FeaturesContext } from './Context';

const BuyModel = ({ setBuyModel }) => {
  const { buy, setBuy } = useContext(FeaturesContext);
  const [buyData, setBuyData] = useState([...buy]);
  const [newItem, setNewItem] = useState(null);

  const closeModel = () => {
    setBuyModel(false);
  };

  const saveData = () => {
    // Update the buy state with the modified data
    setBuy(buyData);
    setBuyModel(false);
  };

  const handleInputChange = (event, index, field) => {
    const { value } = event.target;
    const updatedData = buyData.map((item, i) => {
      if (i === index) {
        return { ...item, [field]: value };
      } else {
        return item;
      }
    });
    setBuyData(updatedData);
  };

  const handleAddItem = () => {
    const newItem = {
      image: 'https://i.gadgets360cdn.com/products/large/lava-agni-2-5g-lava-db-680x800-1684220775.jpg?downsize=*:180',
      desc: 'add description here',
      StoreImage: 'https://pngimg.com/uploads/amazon/amazon_PNG24.png',
      link: 'add link of amazon product',
    };
    setBuyData((prevData) => [...prevData, newItem]);
  };
  

  const handleAddNewItem = () => {
    setBuyData((prevData) => [...prevData, newItem]);
    setNewItem(null);
  };

  const handleDeleteItem = (index) => {
    setBuyData((prevData) => prevData.filter((_, i) => i !== index));
  };

  return (
    <div className="model w-full bg-slate-100 h-full w-full py-10 fixed top-0 backdrop-blur-3xl overflow-y-scroll">
      <div className="w-full flex flex-col rounded-2xl p-10">
        <div className="buy-items w-full">
          {buyData.map((data, index) => (
            <div key={index} className="w-full bg-slate-100 p-3 my-5 rounded-2xl flex flex-col">
              <div className="buyDes">
                <label className="block mb-1">
                  Image URL:
                  <input
                    type="text"
                    value={data.image}
                    onChange={(e) => handleInputChange(e, index, 'image')}
                    className="border border-gray-300 p-2 w-full"
                  />
                </label>
                <label className="block mb-1">
                  Description:
                  <input
                    type="text"
                    value={data.desc}
                    onChange={(e) => handleInputChange(e, index, 'desc')}
                    className="border border-gray-300 p-2 w-full"
                  />
                </label>
                <label className="block mb-1">
                  Store Image URL:
                  <input
                    type="text"
                    value={data.StoreImage}
                    onChange={(e) => handleInputChange(e, index, 'StoreImage')}
                    className="border border-gray-300 p-2 w-full"
                  />
                </label>
                <label className="block mb-1">
                  Link:
                  <input
                    type="text"
                    value={data.link}
                    onChange={(e) => handleInputChange(e, index, 'link')}
                    className="border border-gray-300 p-2 w-full"
                  />
                </label>
              </div>
              <button
                className="buyBtn bg-red-500 text-white py-2 px-4 mt-3 rounded-md"
                onClick={() => handleDeleteItem(index)}
              >
                Delete Item
              </button>
            </div>
          ))}
          {newItem && (
            <div className="buyContainer bg-slate-100 p-3 my-5 rounded-2xl w-full flex flex-col">
              <div className="buyDes">
                <label className="block mb-1">
                  Image URL:
                  <input
                    type="text"
                    value={newItem.image}
                    onChange={(e) => setNewItem((prevItem) => ({ ...prevItem, image: e.target.value }))}
                    className="border border-gray-300 p-2 w-full"
                  />
                </label>
                <label className="block mb-1">
                  Description:
                  <input
                    type="text"
                    value={newItem.desc}
                    onChange={(e) => setNewItem((prevItem) => ({ ...prevItem, desc: e.target.value }))}
                    className="border border-gray-300 p-2 w-full"
                  />
                </label>
                <label className="block mb-1">
                  Store Image URL:
                  <input
                    type="text"
                    value={newItem.StoreImage}
                    onChange={(e) => setNewItem((prevItem) => ({ ...prevItem, StoreImage: e.target.value }))}
                    className="border border-gray-300 p-2 w-full"
                  />
                </label>
                <label className="block mb-1">
                  Link:
                  <input
                    type="text"
                    value={newItem.link}
                    onChange={(e) => setNewItem((prevItem) => ({ ...prevItem, link: e.target.value }))}
                    className="border border-gray-300 p-2 w-full"
                  />
                </label>
              </div>
              <button
                className="buyBtn bg-green-500 text-white py-2 px-4 mt-3 rounded-md"
                onClick={handleAddNewItem}
              >
                Add Item
              </button>
            </div>
          )}
        </div>
        <div className="bg-slate-100 p-3 my-5 rounded-2xl w-[40rem]">
          <button
            className="my-3 px-4 py-2 bg-green-500 text-white rounded-md"
            onClick={handleAddItem}
          >
            Add New Item
          </button>
        </div>
      </div>
      <div className="edits flex justify-center items-center">
        <button
          onClick={saveData}
          className="px-10 py-2 text-lg text-white font-bold bg-green-500 rounded-2xl mr-10"
        >
          Save
        </button>
        <button
          onClick={closeModel}
          className="px-10 py-2 text-lg text-white font-bold bg-slate-500 rounded-2xl mx-2"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default BuyModel;
