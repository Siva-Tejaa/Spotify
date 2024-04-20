import React from "react";
import SpotifyLogo from "../assets/SpotifyLogo.webp";

//Api
import { SPOTIFY_AUTHORIZATION_URL } from "../utils/api/api";

//Redux
import { useDispatch } from "react-redux";

const LoginPage = () => {
  const loginHandler = async () => {
    window.location = SPOTIFY_AUTHORIZATION_URL;
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
