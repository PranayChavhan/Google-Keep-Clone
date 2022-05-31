import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import LoginBtn from "../components/LoginBtn";
import { useSelector, useDispatch } from "react-redux";
import { selectUserName } from "../features/user/userSlice";
import { auth, provider } from "../Firebase/firebase.config";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { setUserLoginDetails } from "../features/user/userSlice";

const Login = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("isAuthenticated")) {
      navigate("/home");
    } else {
      navigate("/");
    }
  }, []);

  return (
    <div className="bg-[#202124] min-h-screen text-[#e8eaed] font-sans font-medium">
      <div className="flex flex-col gap-5 justify-center items-center min-h-screen">
        <img src="assets/google-keep.svg" alt="logo" width={80} />
        <LoginBtn />
      </div>
    </div>
  );
};

export default Login;
