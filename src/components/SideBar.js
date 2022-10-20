import React from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { GoLightBulb } from "react-icons/go";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineModeEdit } from "react-icons/md";
import { RiInboxArchiveLine } from "react-icons/ri";
import { BsTrash} from "react-icons/bs";
import { useLocation } from "react-router-dom";

const SideBar = () => {
    const location = useLocation();
    console.log(location.pathname);

  return (
    <div>
      <div className=""> 
      <Link to="/home">
        <div className={`flex items-center active ? bg-[#41331c] :  rounded-r-full h-12 pl-7 gap-10`}>
          <IconContext.Provider value={{ color: "rgba(241,243,244,0.7)" }}>
            <GoLightBulb size={20}/>
          </IconContext.Provider>
          <h1>Notes</h1>
        </div>
      </Link>
      <Link to="/reminders">
        <div className="flex items-center rounded-r-full h-12 pl-7 gap-10">
          <IconContext.Provider value={{ color: "rgba(241,243,244,0.7)" }}>
            <IoMdNotificationsOutline size={20}/>
          </IconContext.Provider>
          <h1>Reminders</h1>
        </div>
      </Link>
      <Link to="/edit">

        <div className="flex items-center rounded-r-full h-12 pl-7 gap-10">
          <IconContext.Provider value={{ color: "rgba(241,243,244,0.7)" }}>
            <MdOutlineModeEdit size={20}/>
          </IconContext.Provider>
          <h1>Edit labels</h1>
        </div>
      </Link>
      <Link to="/archive">

        <div className="flex items-center rounded-r-full h-12 pl-7 gap-10">
          <IconContext.Provider value={{ color: "rgba(241,243,244,0.7)" }}>
            <RiInboxArchiveLine size={20}/>
          </IconContext.Provider>
          <h1>Archive</h1>
        </div>
      </Link>
      <Link to="/trash">
        <div className="flex items-center rounded-r-full h-12 pl-7 gap-10">
          <IconContext.Provider value={{ color: "rgba(241,243,244,0.7)" }}>
            <BsTrash size={20}/>
          </IconContext.Provider>
          <h1>Trash</h1>
        </div>
      </Link>
      </div>
    </div>
  );
};

export default SideBar;
