import React, { useState } from "react";
import SpotifyLogo from "../assets/SpotifyLogo.webp";

//Redux Imports
import { useSelector, useDispatch } from "react-redux";
import { testLogout } from "../redux/features/userSlice";
import { setMenu } from "../redux/features/menuSlice";

const Header = () => {
  const menu = useSelector((state) => state.menu);

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(setMenu());
    dispatch(testLogout());
  };
  return (
    <header className="bg-[#121212] p-3 flex items-center justify-between">
      <img src={SpotifyLogo} alt="Spotify" className="w-40" />
      <div className="relative cursor-pointer">
        <img
          src="https://cdn.auth0.com/avatars/st.png"
          alt="userAccount"
          className="w-12 rounded-full"
          onClick={() => dispatch(setMenu(!menu))}
        />
        {menu && (
          <div className="flex flex-col bg-white gap-2 absolute right-[-8px] border-[1px] laptop:right-0">
            <span className="px-10 py-2 hover:bg-[#e2dede]">Account</span>
            <span className="px-10 py-2 hover:bg-[#e2dede]">Profile</span>
            <span className="px-10 py-2 hover:bg-[#e2dede]">Settings</span>
            <span
              className="px-10 py-2 hover:bg-[#e2dede]"
              onClick={logoutHandler}
            >
              Logout
            </span>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
