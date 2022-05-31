import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectUserName } from "../features/user/userSlice";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "../Firebase/firebase.config";
import { setUserLoginDetails } from "../features/user/userSlice";

const LoginBtn = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("isAuthenticated")) {
      navigate("/home");
    } else {
      navigate("/");
    }
  }, []);

  const GoogleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        navigate("/home");
        const user = result.user;
        console.log(user);
        localStorage.setItem("isAuthenticated", JSON.stringify(user));
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage.message);
      });
  };

  const FbAuth = () => {};

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <div>
      <button
        onClick={GoogleAuth}
        className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
      >
        <span className="w-48 h-48 rounded rotate-[-40deg] bg-yellow-500 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
        <span className="flex items-center justify-center gap-4 relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
          <FcGoogle />
          Login to continue
        </span>
      </button>
    </div>
  );
};

export default LoginBtn;
