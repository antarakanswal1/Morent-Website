import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFilter, faHeart, faBell, faCog, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className="flex items-center bg-white h-16 px-4 md:px-6 mb-6">
      {/* Logo and Search Bar */}
      <div className="flex items-center space-x-3">
        <div className="text-[#3563E9] font-bold text-3xl mt-7">MORENT</div>
        <div className="relative w-64 md:w-96 ms-5 mt-7">
          <input
            type="text"
            placeholder="Search something here"
            className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg placeholder-gray-400 text-gray-500"
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <FontAwesomeIcon icon={faFilter} />
          </div>
        </div>
      </div>

      {/* Spacer for Mobile */}
      <div className="flex-grow md:hidden"></div>

      {/* Right Section */}
      <div className="flex items-center space-x-4 md:place-self-end ml-auto">
        {/* Action Icons (visible on laptop) */}
        <div className="hidden md:flex space-x-4">
          <div className="text-gray-700 w-6 h-6">
            <FontAwesomeIcon icon={faHeart} />
          </div>
          <div className="text-gray-700 w-6 h-6">
            <FontAwesomeIcon icon={faBell} />
          </div>
          <div className="text-gray-700 w-6 h-6">
            <FontAwesomeIcon icon={faCog} />
          </div>
        </div>
        {/* Profile Icon (always visible) */}
        <div className="text-gray-700">
          <FontAwesomeIcon icon={faUserCircle} size="2x" className="text-gray-700" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
