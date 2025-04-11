import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faFilter,
  faHeart,
  faBell,
  faCog,
  faUserCircle,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white h-16 px-4 md:px-6 mb-6 mt-3 flex items-center justify-between relative">
      {/* Left: Logo and Search */}
      <div className="flex items-center space-x-3 w-full md:w-auto">
        <div className="text-[#3563E9] font-bold text-3xl">MORENT</div>
        <div className="hidden sm:block relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
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

      {/* Right: Icons */}
      <div className="flex items-center space-x-4">
        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} size="lg" />
        </button>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <FontAwesomeIcon icon={faHeart} className="text-gray-700 w-5 h-5" />
          <FontAwesomeIcon icon={faBell} className="text-gray-700 w-5 h-5" />
          <FontAwesomeIcon icon={faCog} className="text-gray-700 w-5 h-5" />
        </div>

        {/* Profile Icon (always visible) */}
        <FontAwesomeIcon icon={faUserCircle} size="2x" className="text-gray-700" />
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md z-10 flex flex-col px-4 py-3 space-y-3 md:hidden">
          <div className="flex items-center space-x-3">
            <FontAwesomeIcon icon={faHeart} className="text-gray-700 w-5 h-5" />
            <span className="text-sm text-gray-700">Favorites</span>
          </div>
          <div className="flex items-center space-x-3">
            <FontAwesomeIcon icon={faBell} className="text-gray-700 w-5 h-5" />
            <span className="text-sm text-gray-700">Notifications</span>
          </div>
          <div className="flex items-center space-x-3">
            <FontAwesomeIcon icon={faCog} className="text-gray-700 w-5 h-5" />
            <span className="text-sm text-gray-700">Settings</span>
          </div>
          {/* Optional: Mobile search input */}
          <div className="sm:hidden mt-3 relative">
            <input
              type="text"
              placeholder="Search"
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
      )}
    </div>
  );
};

export default Navbar;
