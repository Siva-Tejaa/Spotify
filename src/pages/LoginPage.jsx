import React from "react";
import SpotifyLogo from "../assets/SpotifyLogo.webp";

//Redux
import { useDispatch } from "react-redux";
import { testLogin } from "../redux/features/userSlice";

const LoginPage = () => {
  const dispatch = useDispatch();

  const loginHandler = () => {
    dispatch(testLogin());
  };

  return (
    <div className="landing-page h-[100svh] flex items-center justify-center">
      <div className="bg-[#121212] p-24 rounded-md flex flex-col gap-8 laptop:p-32">
        <img src={SpotifyLogo} className="w-48" />
        <button
          className="bg-primary p-2 rounded-full text-lg font-[700px]"
          onClick={loginHandler}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
