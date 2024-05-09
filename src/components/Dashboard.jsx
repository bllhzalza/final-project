import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import Navbar from "./Navbar";
import { FaCircleUser } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaUnlock } from "react-icons/fa6";

const Dashboard = () => {
  return (
    <div className="min-w-full absolute md:absolute bg-slate-50 min-h-screen">
      <div className="min-w-full fixed">
      <Navbar />
      </div>
      <div className="min-w-screen flex justify-center items-center pt-24 lg:flex">
        <div className="text-wrap py-5 px-4 min-w-72 h-fit bg-rose-200 rounded shadow">
          <form action="">
            <div className="px-3 justify-center items-center">
              <div className="w-full justify-center items-center flex">
                <FaRegUserCircle className="flex h-28 w-28"></FaRegUserCircle>
              </div>

              <div className="flex items-center mt-3 mb-2">
                <div className="relative md:w-full">
                  <span className="flex absolute md:absolute inset-y-0 left-1 items-center">
                    <p className="flex p-2 focus:outline-none">
                    <FaCircleUser className="text-rose-600 md-text-rose-500 h-10 w-4"></FaCircleUser>
                    </p>
                  </span>
                  <input
                    className="h-8 rounded w-full text-sm bg-white pl-12 flex"
                    type="text"
                    placeholder="Fullname"
                    required
                    value="zalzabillah"
                    disabled
                  ></input>
                </div>
              </div>

              <div className="flex items-center mb-2">
              <div className="relative md:w-full">
              <span className="flex absolute md:absolute inset-y-0 left-1 items-center">
                    <p className="flex p-2 focus:outline-none">
                    <FaEnvelope className="text-rose-600 md-text-rose-500 h-10 w-4"></FaEnvelope>
                    </p>
                  </span>
                  <input
                    className="h-8 rounded w-full text-sm bg-white pl-12 flex"
                    type="text"
                    placeholder="Email"
                    required
                    value="zalzabilah2000@gmail.com"
                    disabled
                  ></input>
                  </div>
                  </div>

              <div className="flex items-center mb-2">
                <div className="relative md:w-full">
                  <span className="flex absolute md:absolute inset-y-0 left-1 items-center">
                    <p className="flex p-2 focus:outline-none">
                    <FaPhone className="text-rose-600 md-text-rose-500 h-10 w-4"></FaPhone>
                    </p>
                  </span>
                  <input
                    className="h-8 rounded w-full text-sm bg-white pl-12 flex"
                    type="text"
                    placeholder="No HP"
                    required
                    value="0889757XXXX"
                    disabled
                  ></input>
                </div>
              </div>


              <div className="flex items-center mb-2">
                <div className="relative md:w-full">
                  <span className="flex absolute md:absolute inset-y-0 left-1 items-center">
                    <p className="flex p-2 focus:outline-none">
                    <FaUnlock className="text-rose-600 md-text-rose-500 h-10 w-4"></FaUnlock>
                    </p>
                  </span>
                  <input
                    className="h-8 rounded w-full text-sm bg-white pl-12 flex"
                    type="text"
                    placeholder="Password"
                    required
                    value="******"
                    disabled
                  ></input>
                </div>
              </div>

              <div className="flex justify-center">
              <button
                className="flex mt-1 rounded justify-center items-center bg-red-500 w-4/5 min-h-7 shadow-md"
                type="submit">
                <p className="text-sm font-semibold text-white">Edit Profile</p>
              </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
