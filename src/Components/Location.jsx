import React from "react";

const Location = () => {
  return (
    <div className="flex items-center justify-center max-w-[1400px] w-[90%] lg:w-full min-h-[300px]">
      <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row items-center p-4">
        {/* Pick-Up Section */}
        <div className="flex-1 p-4">
          <h6 className="text-blue-500 font-semibold flex items-center">
            <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span> Pick-Up
          </h6>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
            <div>
              <label className="font-semibold text-sm">Locations</label>
              <select className="w-full p-2 border rounded-md text-gray-600">
                <option>Select your city</option>
              </select>
            </div>
            <div>
              <label className="font-semibold text-sm">Date</label>
              <input type="date" className="w-full p-2 border rounded-md text-gray-600" />
            </div>
            <div>
              <label className="font-semibold text-sm">Time</label>
              <input type="time" className="w-full p-2 border rounded-md text-gray-600" />
            </div>
          </div>
        </div>

        {/* Swap Button with FontAwesome Icon */}
        <div className="bg-blue-500 text-white p-3 rounded-lg shadow-lg my-4 md:mx-4 self-center md:self-auto cursor-pointer flex justify-center items-center">
          <i className="fas fa-exchange-alt" style={{ fontSize: '20px' }}></i>
        </div>

        {/* Drop-Off Section */}
        <div className="flex-1 p-4">
          <h6 className="text-blue-500 font-semibold flex items-center">
            <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span> Drop-Off
          </h6>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
            <div>
              <label className="font-semibold text-sm">Locations</label>
              <select className="w-full p-2 border rounded-md text-gray-600">
                <option>Select your city</option>
              </select>
            </div>
            <div>
              <label className="font-semibold text-sm">Date</label>
              <input type="date" className="w-full p-2 border rounded-md text-gray-600" />
            </div>
            <div>
              <label className="font-semibold text-sm">Time</label>
              <input type="time" className="w-full p-2 border rounded-md text-gray-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;