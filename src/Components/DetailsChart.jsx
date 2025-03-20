import React from "react";

const DetailsChart = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-4">
      <h3 className="text-lg font-semibold mb-3">Details Rental</h3>
      
      {/* Map Section */}
      <div className="w-full h-40 rounded-lg overflow-hidden mb-4">
        <iframe
          className="w-full h-full"
          frameBorder="0"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%&height=100%&hl=en&q=Rishikesh&t=&z=14&ie=UTF8&iwloc=B&output=embed"
        ></iframe>
      </div>

      {/* Car Details */}
      <div className="flex items-center 
      space-x-4 border-b pb-4">
        <div className="w-24 h-16 bg-gray-200 rounded-lg"></div>
        <div>
          <h3 className="text-lg font-semibold">Nissan GT-R</h3>
          <p className="text-sm text-gray-500">Sports Car</p>
        </div>
      </div>

      {/* Pick-Up Section */}
      <div className="mt-4">
        <div className="flex items-center space-x-2">
          <input type="radio" name="rental" className="accent-blue-500" />
          <span className="font-medium">Pick-Up</span>
        </div>
        <div className="text-sm text-gray-500 ml-6">
          <p>Location: Kota Semarang</p>
          <p>Date: 20 July 2022</p>
          <p>Time: 07:00</p>
        </div>
      </div>

      {/* Drop-Off Section */}
      <div className="mt-4">
        <div className="flex items-center space-x-2">
          <input type="radio" name="rental" className="accent-blue-500" />
          <span className="font-medium">Drop-Off</span>
        </div>
        <div className="text-sm text-gray-500 ml-6">
          <p>Location: Kota Semarang</p>
          <p>Date: 21 July 2022</p>
          <p>Time: 01:00</p>
        </div>
      </div>

      {/* Price Section */}
      <div className="mt-6 border-t pt-4 text-center">
        <h6 className="text-gray-600 text-sm">Total Rental Price</h6>
        <p className="text-xs text-gray-400">Overall price includes rental discount</p>
        <h1 className="text-2xl font-bold mt-2">$80.00</h1>
      </div>
    </div>
  );
};

export default DetailsChart;