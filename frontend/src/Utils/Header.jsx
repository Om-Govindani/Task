import React from 'react';

const Header = () => {
  return (
    <header className="text-gray-900">
      {/* Top bar with store info */}
      <div className="bg-neutral-800 text-gray-300 text-sm py-2">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side: Store location */}
        <p className="ml-4">
          Store Location: Lincoln- 344, Illinois, Chicago, USA
        </p>
        
        {/* Right side: Language, Currency, Sign in / Sign up */}
        <div className="flex space-x-4 items-center mr-4">
          <div className="flex space-x-2 items-center">
            <span>Eng</span>
            <i className="fas fa-chevron-down"></i>
          </div>
          <div className="flex space-x-2 items-center">
            <span>USD</span>
            <i className="fas fa-chevron-down"></i>
          </div>
          <a href="/signin" className="hover:underline">
            Sign in / Sign up
          </a>
        </div>
      </div>
    </div>
    <div className="container mx-auto bg-white py-4 ">
        <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
                <img
                src="https://img.icons8.com/ios-filled/50/4caf50/plant-under-sun.png"
                alt="Logo"
                className="w-8"
                />
                <span className="text-2xl font-bold text-gray-900">Ecobazar</span>
            </div>

            <div className="w-[500px]">
                <div className="relative">
                    <input
                    type="text"
                    placeholder="Search"
                    className="w-full py-2 px-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button className="absolute top-0 right-0 h-full px-8 bg-green-500 text-white rounded-r-md">
                    Search
                </button>
                </div>
            </div>

            {/* Cart Icon with Balance */}
            <div className="flex flex-row justify-end items-center">
                <div className="flex items-center space-x-2">
                {/* Cart Icon */}
                <i className="fas fa-shopping-cart text-2xl text-gray-700"></i>
                {/* Balance */}
                <span className="text-gray-800 font-semibold">$57.00</span>
                </div>
            </div>
        </div>
    </div>
    </header>
  );
};

export default Header;
