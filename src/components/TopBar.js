import React from "react";
import { IconContext } from "react-icons";  
import { GiHamburgerMenu } from "react-icons/gi";
import { GoSearch } from "react-icons/go";
import { MdOutlineRefresh } from "react-icons/md";
import { TiThListOutline } from "react-icons/ti";
import { FiSettings } from "react-icons/fi";
import { IoApps } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";

const TopBar = () => {
  return (
    <div>
      <div className="border-b-[1px] border-b-[rgba(241,243,244,0.24)] flex justify-between py-2 px-7">
        <div className="flex items-center gap-5">
        <IconContext.Provider value={{ color: "rgba(241,243,244,0.7)" }}>
          <GiHamburgerMenu size={20} />
          </IconContext.Provider>
          <div className="flex items-center gap-4">
            <img
              className="h-10"
              src="assets/google-keep.svg"
              alt="keep logo"
            />
            <h1 className="p-0 text-[22px]">Keep</h1>
          </div>
          <div className="ml-16 flex">
            <div className="mt-[15px] ml-4 absolute">
              <GoSearch size={20} />
            </div>
            <input
              className="h-12 w-[45rem] relative rounded-lg bg-[rgba(241,243,244,0.24)] pl-14 text-[#e8eaed] placeholder:text-[#e8eaed] font-semibold"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="flex items-center gap-6 -mr-80">
          <IconContext.Provider value={{ color: "rgba(241,243,244,0.7)" }}>
            <MdOutlineRefresh size={26} />
            <TiThListOutline size={20} />
            <FiSettings size={20} />
          </IconContext.Provider>
        </div>
        <div className="flex items-center gap-5">
        <IconContext.Provider value={{ color: "rgba(241,243,244,0.7)" }}>
          <IoApps size={20} />
          <BsPersonCircle size={30} />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
