import React, { useState } from "react";
import { IconContext } from "react-icons";
import { RiPushpin2Line } from "react-icons/ri";
import { MdOutlineNotificationImportant } from "react-icons/md";
import { MdPersonAddAlt } from "react-icons/md";
import { IoColorPaletteOutline } from "react-icons/io5";
import { HiOutlinePhotograph } from "react-icons/hi";
import { RiInboxArchiveLine } from "react-icons/ri";
import { RiArrowGoBackFill } from "react-icons/ri";
import { RiArrowGoForwardFill } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";

const Home = () => {
  const [stateee, setStateee] = useState(false);

  const handleClick = () => {
    console.log("====================================");
    console.log("clicked");
    console.log("====================================");
  };
  return (
    <div>
      <div className="flex justify-center pt-5">
        {stateee ? (
          <div className="flex flex-col gap-5 border-[1px] w-[35rem] border-[rgba(241,243,244,0.7)] rounded-lg px-4 py-2">
            <div className="flex justify-between">
              <input
                className="bg-transparent placeholder:text-[rgba(241,243,244,0.7)] placeholder:font-semibold outline-none"
                type="text"
                placeholder="Title"
              />
              <IconContext.Provider value={{ color: "rgba(241,243,244,0.7)" }}>
                <RiPushpin2Line size={20} />
              </IconContext.Provider>
            </div>
            <input
              className="bg-transparent placeholder:text-[rgba(241,243,244,0.7)] placeholder:font-semibold outline-none"
              type="text"
              placeholder="Take a note..."
            />
            <div className="flex justify-between">
              <div className="flex gap-4">
            <IconContext.Provider value={{ color: "rgba(241,243,244,0.7)" }}>
              <MdOutlineNotificationImportant size={20}/>
              <MdPersonAddAlt size={20}/>
              <IoColorPaletteOutline size={20}/>
              <HiOutlinePhotograph size={20}/>
              <RiInboxArchiveLine size={20}/>
              <BsThreeDotsVertical size={20}/>
              <RiArrowGoBackFill size={20}/>
              <RiArrowGoForwardFill size={20}/>
            </IconContext.Provider>
              </div>
              <button onClick={(()=>{setStateee(false)})}>Close</button>
            </div>
          </div>
        ) : (
          <input
            onClick={() => {
              setStateee(true);
            }}
            type="text"
            className="bg-transparent border-[1px] h-10 w-[35rem] border-[rgba(241,243,244,0.7)] rounded-lg drop-shadow-2xl placeholder:text-[rgba(241,243,244,0.7)] placeholder:font-semibold pl-4"
            placeholder="Take a note..."
          />
        )}
      </div>
    </div>
  );
};

export default Home;
