import React, { useState } from "react";
import SpotifyLogo from "../assets/SpotifyLogo.webp";

//Api
import { SPOTIFY_AUTHORIZATION_URL } from "../utils/api/api";

//Redux
import { useDispatch } from "react-redux";
import { loginMails } from "../utils/constants/constants";

const LoginPage = () => {
  const [copytext, setCopyText] = useState("Copy");
  const [email, setEmail] = useState("fejagir838@togito.com");

  const loginHandler = async () => {
    window.location = SPOTIFY_AUTHORIZATION_URL;
  };

  return (
    <div className="landing-page h-[100svh] flex flex-col gap-2 items-center justify-center">
      <p className="text-xs text-white text-center p-1">
        Note : As per spotify api developer documentation, users who had
        registered in the admin dashboard, can only access the application.
        <br /> pLease use the below emails and passwords to access the
        application{" "}
      </p>
      <div className="bg-[#121212] p-20 rounded-md flex flex-col gap-8 laptop:p-28">
        <div className="flex flex-col gap-1">
          <div className="flex items-center">
            <select
              className="w-[100%] p-1 rounded-l-sm border-0 outline-none"
              onChange={(e) => setEmail(e.target.value)}
            >
              {loginMails.map((mail) => (
                <option key={mail.email} value={mail?.email}>
                  {mail?.email}
                </option>
              ))}
            </select>
            <button
              className="bg-primary py-1 px-2 rounded-r-sm w-20"
              onClick={() => {
                setCopyText("Copied");
                navigator.clipboard.writeText(email);
                setTimeout(() => {
                  setCopyText("Copy");
                }, [5000]);
              }}
            >
              {copytext}
            </button>
          </div>
          <p className="text-white text-sm text-center">
            Password : Spotify@12345
          </p>
        </div>
        <img src={SpotifyLogo} className="w-48 self-center" />
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
