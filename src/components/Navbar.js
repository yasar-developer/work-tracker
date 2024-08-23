import React, { useContext } from "react";
import { CiSearch } from "react-icons/ci";
import { MdHistory } from "react-icons/md";
import { PiSignOutDuotone } from "react-icons/pi";
import MyContext from "../context/UserContext";
import { signOut } from "../utils/AuthUtils";

const Navbar = () => {
  const { IsAuthenticated,setIsAuthenticated } = useContext(MyContext);

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-2 md:py-3 lg:py-4 w-full text-sm md:text-base lg:text-lg">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex-shrink-0 font-semibold text-gray-800">
            <img
              src="logo.png"
              alt="Logo"
              className="inline-block h-6 md:h-8 lg:h-10 mr-2"
            />
          </div>
        </div>
        {IsAuthenticated ? (
          <div className="flex items-center space-x-4 md:space-x-6 lg:space-x-8  ">
            <div className="relative w-full">
              <input
                required
                type="text"
                className="sc-searchbox-field h-10 md:h-12 lg:h-14 w-full pl-10 md:pl-12 lg:pl-14 pr-4 py-4 bg-[#e7edf3] rounded-xl border-0 focus:outline-none text-black"
              />
              <div className="absolute inset-0 flex items-center justify-center text-black/60 pointer-events-none transition-transform duration-200 ease-in-out sc-searchbox-placeholder">
                <CiSearch className="h-4 md:h-5 lg:h-6 w-4 md:w-5 lg:w-6" />
                <p className="mx-3 text-xs md:text-sm lg:text-base transition-opacity duration-200 ease-in-out">
                  Search...
                </p>
              </div>
            </div>
            <button className="text-gray-500 hover:text-blue-600 active:text-blue-800">
              <MdHistory className="h-5 md:h-6 lg:h-7 w-5 md:w-6 lg:w-7" />
            </button>
            <button className="text-gray-500 hover:text-blue-600 active:text-blue-800">
              <PiSignOutDuotone className="h-5 md:h-6 lg:h-7 w-5 md:w-6 lg:w-7" onClick={() => signOut(setIsAuthenticated)}/>
            </button>
            <div className="relative">
              <img
                className="h-8 md:h-10 lg:h-12 w-8 md:w-10 lg:w-12 rounded-full object-cover"
                src="profile.jpg"
                alt="Profile"
              />
            </div>
          </div>
        ):""}
      </div>
    </nav>
  );
};

export default Navbar;
