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

const Notes = () => {
  const [stateee, setStateee] = useState(false);
  const [modal, setModal] = useState(false);

  return (
    <div className="">
      {modal ? (
        <div className="">
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-16 mx-auto max-w-3xl">
              <div className=" rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none border-[1px] p-3 border-[rgba(241,243,244,0.7)] ">
                <div className="flex items-start justify-between p-5 rounded-t">
                  <input
                    className="bg-transparent placeholder:text-[rgba(241,243,244,0.7)] placeholder:font-semibold outline-none"
                    type="text"
                    placeholder="Notes"
                  />
                  <IconContext.Provider
                    value={{ color: "rgba(241,243,244,0.7)" }}
                  >
                    <RiPushpin2Line size={20} />
                  </IconContext.Provider>
                </div>

                <input
                  className="bg-transparent placeholder:text-[rgba(241,243,244,0.7)] placeholder:font-semibold outline-none"
                  type="text"
                  placeholder="Take a note..."
                />

                <div className="flex justify-between items-center gap-4 p-6">
                  <div className="flex gap-4">
                    <IconContext.Provider
                      value={{ color: "rgba(241,243,244,0.7)" }}
                    >
                      <MdOutlineNotificationImportant size={20} />
                      <MdPersonAddAlt size={20} />
                      <IoColorPaletteOutline size={20} />
                      <HiOutlinePhotograph size={20} />
                      <RiInboxArchiveLine size={20} />
                      <BsThreeDotsVertical size={20} />
                      <RiArrowGoBackFill size={20} />
                      <RiArrowGoForwardFill size={20} />
                    </IconContext.Provider>
                  </div>
                  <button onClick={() => setModal(false)}>Close</button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
      ) : (
        <div className="">
          <div
            onClick={() => setModal(true)}
            className=" border-[1px] p-3 border-[rgba(241,243,244,0.7)] rounded-lg h-28"
          >
            Notes
          </div>
        </div>
      )}
    </div>
  );
};

export default Notes;
