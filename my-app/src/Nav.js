import React, { useState,useEffect } from 'react';
import Menu from './Menu';

function Nav() {
  
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  
  return (
    <nav className="bg-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 border-b border-solid border-slate-600">
        
        <div className="flex flex-wrap items-center font-bold tracking-wider scale-100 hover:scale-110 ease-out duration-200">
        <img style={{height:"50px"}} src="himalayan_logo.png" alt="LOGO" /> 
         <div className="name p-8">Himalayan Explorer</div>
        </div>
        <div className="hidden md:block">
          <Menu />
        </div>
        <button
          type="button"
          className="md:hidden bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
          onClick={() => setShowMobileMenu(!showMobileMenu)}>
          <svg
            className="h-6 w-6"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div className="md:hidden">
        {showMobileMenu && <Menu />}
      </div>
    </nav>
  );
}

export default Nav;