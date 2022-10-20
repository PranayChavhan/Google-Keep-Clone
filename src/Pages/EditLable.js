import React from "react";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";

const EditLable = () => {
  return (
    <div className="bg-[#202124] min-h-screen text-[#e8eaed] font-sans font-medium">
      <TopBar />
      <div className="grid grid-cols-11 gap-4 pt-2">
        <div className="col-start-1 col-end-3">
          <SideBar />
        </div>
        <div className="col-start-3 col-end-12">
          <div>EditLable</div>
        </div>
      </div>
    </div>
  );
};

export default EditLable;
