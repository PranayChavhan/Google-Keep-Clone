import React from "react";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import Home from "./Pages/Home";
import Reminders from "./Pages/Reminders";
import EditLable from "./Pages/EditLable";
import Archive from "./Pages/Archive";
import Trash from "./Pages/Trash";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-[#202124] min-h-screen text-[#e8eaed] font-sans font-medium">
        <TopBar />
        <div className="grid grid-cols-11 gap-4 pt-2">
          <div className="col-start-1 col-end-3">
            <SideBar />
          </div>
          <div className="col-start-3 col-end-12">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/reminders" element={<Reminders/>} />
              <Route path="/edit" element={<EditLable/>} />
              <Route path="/archive" element={<Archive/>} />
              <Route path="/trash" element={<Trash/>} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
