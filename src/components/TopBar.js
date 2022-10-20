import React from "react";
import { IconContext } from "react-icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoSearch } from "react-icons/go";
import { MdOutlineRefresh } from "react-icons/md";
import { TiThListOutline } from "react-icons/ti";
import { FiSettings } from "react-icons/fi";
import { IoApps } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const TopBar = () => {
  let navigate = useNavigate();
  var retrievedObject = localStorage.getItem("isAuthenticated");

  let result = JSON.parse(retrievedObject);

  return (
    <div>
      <div className="border-b-[1px] border-b-[rgba(241,243,244,0.24)] flex justify-between py-2 px-7">
        <div className="flex items-center gap-5">
          <div className="hidden md:block">
            <IconContext.Provider value={{ color: "rgba(241,243,244,0.7)" }}>
              <GiHamburgerMenu size={20} />
            </IconContext.Provider>
          </div>
          <div className="flex items-center gap-4">
            <img
              className="h-10"
              src="assets/google-keep.svg"
              alt="keep logo"
            />
            <h1 className="p-0 text-[22px]">Keep</h1>
          </div>
          <div className="md:ml-16  flex">
            <div className="mt-[15px] ml-4 absolute">
              <GoSearch size={20} />
            </div>
            <input
              className="h-12 md:w-[45rem] w-[10rem] relative rounded-lg bg-[rgba(241,243,244,0.24)] pl-14 text-[#e8eaed] placeholder:text-[#e8eaed] font-semibold"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        <div className=" flex items-center gap-6 -mr-80  ">
          <IconContext.Provider value={{ color: "rgba(241,243,244,0.7)" }}>
            <MdOutlineRefresh size={26} />
            <TiThListOutline size={20} />
            <FiSettings size={20} />
          </IconContext.Provider>
        </div>

        <div className="flex items-center md:gap-5">
          <IconContext.Provider value={{ color: "rgba(241,243,244,0.7)" }}>
            <div className="hidden md:block">
              <IoApps size={20} />
            </div>
            <div className="flex items-center gap-4 relative">
              <img
                className="rounded-full cursor-pointer"
                src={result.photoURL}
                alt="Prifile"
                width={45}
              />
              <span>{result.name}</span>

              <div className="absolute top-0  opacity-0 hover:opacity-100 h-24">
                <button
                  onClick={() => {
                    localStorage.clear();
                    navigate("/");
                  }}
                  className="border-[1px] border-[#9696a6] rounded-md px-2 py-2 mt-14  text-[12px] bg-black "
                >
                  Log Out
                </button>
              </div>
            </div>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
