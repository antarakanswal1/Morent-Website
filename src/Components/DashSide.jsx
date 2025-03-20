import React, { useState } from "react";

const DashSide = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("bg-gray-900");
    document.body.classList.toggle("text-white");
  };

  return (
    <div className={`h-screen w-64 p-5 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100"}`}>
      {/* Main Menu */}
      <h6 className="text-gray-500 uppercase text-sm font-semibold mb-2">Main Menu</h6>
      <ul className="space-y-2">
        <li className="bg-blue-500 text-white rounded-lg p-2 flex items-center cursor-pointer">
          <i className="bi bi-house-door mr-2"></i> Dashboard
        </li>
        <li className="p-2 flex items-center text-gray-600 hover:bg-gray-300 rounded-lg cursor-pointer">
          <i className="bi bi-car-front mr-2"></i> Car Rent
        </li>
        <li className="p-2 flex items-center text-gray-600 hover:bg-gray-300 rounded-lg cursor-pointer">
          <i className="bi bi-bar-chart mr-2"></i> Insight
        </li>
        <li className="p-2 flex items-center text-gray-600 hover:bg-gray-300 rounded-lg cursor-pointer">
          <i className="bi bi-wallet2 mr-2"></i> Reimburse
        </li>
        <li className="p-2 flex items-center text-gray-600 hover:bg-gray-300 rounded-lg cursor-pointer">
          <i className="bi bi-chat-left-text mr-2"></i> Inbox
        </li>
        <li className="p-2 flex items-center text-gray-600 hover:bg-gray-300 rounded-lg cursor-pointer">
          <i className="bi bi-calendar mr-2"></i> Calendar
        </li>
      </ul>

      {/* Preferences */}
      <h6 className="text-gray-500 uppercase text-sm font-semibold mt-6 mb-2">Preferences</h6>
      <ul className="space-y-2">
        <li className="p-2 flex items-center text-gray-600 hover:bg-gray-300 rounded-lg cursor-pointer">
          <i className="bi bi-gear mr-2"></i> Settings
        </li>
        <li className="p-2 flex items-center text-gray-600 hover:bg-gray-300 rounded-lg cursor-pointer">
          <i className="bi bi-question-circle mr-2"></i> Help & Center
        </li>
        <li className="flex justify-between items-center p-2 text-gray-600 hover:bg-gray-300 rounded-lg cursor-pointer">
          <span className="flex items-center">
            <i className="bi bi-moon mr-2"></i> Dark Mode
          </span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" onChange={toggleDarkMode} checked={darkMode} />
            <div className="w-10 h-5 bg-gray-300 peer-focus:outline-none rounded-full peer dark:bg-gray-600 peer-checked:bg-blue-500"></div>
          </label>
        </li>
      </ul>
    </div>
  );
};

export default DashSide;