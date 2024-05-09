import React from "react";


const Navbar = () => {
  return (
    <nav className="flex w-full min-h-14 items-center bg-rose-300 px-4 justify-between">
        
        <div>
          <p className="font-bold text-xl">MAKEANART.COM</p>
          <div className="w-44 mt-1 h-[1px] shadow bg-amber-50"></div>
        </div>

      <button className="flex justify-center items-center rounded w-16 h-7 bg-red-500 shadow-md" type="submit">
        <span className="font-semibold text-white text-sm">Logout</span>
        </button>

    </nav >
  );
};
export default Navbar;