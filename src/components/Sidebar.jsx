import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { FaSistrix } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { FaUserLarge } from "react-icons/fa6";
import { FaBook } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className="fixed w-48 min-h-full mt-14 bg-rose-200">
      <div className="mx-4 pt-2">

        <div className="mt-2 w-full items-center justify-start gap-2 flex">
        <FaRegUserCircle className="flex h-10 w-10"></FaRegUserCircle>
          <p className="text-rose-600 font-bold text-md">Hi, Zalza</p>
        </div>

        <div className="flex items-center mt-3">
          <div className="relative md:w-60">
            <span className="relative md:absolute inset-y-0 right-1 flex items-center">
              <button className="p-1 focus:outline-none text-rose-600 md-text-rose-500">
                <FaSistrix />
              </button>
            </span>
            <input
                className="w-full px-2 py-1 pr-8 h-full rounded shadow outline-none hidden md:block"
                type="text"
                required
              ></input>
          </div>
        </div>

        <ul className="mt-3 font-bold">
            <li className="mb-2 rounded hover:shadow hover:bg-white py-2 pl-2">
                 <a href="#" className="flex text-rose-600 items-center">
                 <FaHouse className="inline-block w-6 h-5 mr-2 mt-0"></FaHouse>
                Home
                 </a>
            </li>

            <li className="mb-2 rounded hover:shadow hover:bg-white py-2 pl-2">
                 <a href="#" className="text-rose-600 flex items-center">
                 <FaBook className="inline-block w-6 h-5 mr-2 mt-0"></FaBook>
                Document
                 </a>
            </li>

            <li className="mb-2 rounded hover:shadow hover:bg-white py-2 pl-2">
                 <a href="#" className="text-rose-600 flex items-center">
                 <FaBook className="inline-block w-6 h-5 mr-2 mt-0"></FaBook>
                Document
                 </a>
            </li>

            <li className="mb-2 rounded hover:shadow hover:bg-white py-2 pl-2">
                 <a href="/Profile" className="text-rose-600 flex items-center">
                 <FaUserLarge className="inline-block w-6 h-5 mr-2 mt-0">
                 </FaUserLarge>
                Profile
                 </a>
            </li>

            <li className="mb-2 rounded hover:shadow hover:bg-white py-2 pl-2">
                 <a href="#" className="text-rose-600 flex items-center">
                 <IoMdSettings className="inline-block w-6 h-6 mr-2 mt-0"></IoMdSettings>
                Settings
                 </a>
            </li>

        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
