import React from "react";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import Home from "./Pages/Home";
import Reminders from "./Pages/Reminders";
import EditLable from "./Pages/EditLable";
import Archive from "./Pages/Archive";
import Trash from "./Pages/Trash";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import ProtectedRoute from "./Pages/ProtectedRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/reminders" element={<Reminders />} />
          <Route path="/edit" element={<EditLable />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/trash" element={<Trash />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
