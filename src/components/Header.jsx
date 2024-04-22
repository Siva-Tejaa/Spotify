import React, { useState } from "react";
import SpotifyLogo from "../assets/SpotifyLogo.webp";

//Router
import { Link, useNavigate } from "react-router-dom";

//Redux Imports
import { useSelector, useDispatch } from "react-redux";
import { setMenu } from "../redux/features/menuSlice";
// import { clearAccessToken } from "../redux/features/accessTokenSlice";
import { topNav } from "../utils/constants/constants";
import { userData } from "../redux/features/userSlice";

import { useLogoutHandler } from "./LogoutHandler";

const Header = () => {
  const { isMenuOpen, topActiveItem } = useSelector((state) => state.menu);

  const { userDetails } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const logoutHandler = useLogoutHandler();

  // const logoutHandler = () => {
  //   dispatch(setMenu());
  //   dispatch(settopActiveItem(""));
  //   dispatch(clearAccessToken());
  // };

  const topActiveItems = {
    Account: "Account",
    Profile: "Profile",
    Settings: "Settings",
  };

  const topNavLinks = {
    Account: "/account",
    Profile: "/profile",
    Settings: "/settings",
  };

  // {
  //   console.log(userDetails);
  // }

  return (
    // fixed top-0 left-0 right-0
    <header className="bg-[#121212] p-3 flex items-center justify-between ">
      <Link to="/">
        <img src={SpotifyLogo} alt="Spotify" className="w-40" />
      </Link>
      <div className="relative cursor-pointer">
        {userDetails?.images?.length > 1 ? (
          <img
            src={userDetails?.images[1]?.url}
            alt="userAccount"
            className="w-12 h-12 rounded-full"
            onClick={() => dispatch(setMenu(!isMenuOpen))}
            title={userDetails?.display_name}
          />
        ) : (
          <img
            src={`https://cdn.auth0.com/avatars/${userDetails?.display_name
              ?.slice(0, 2)
              .toLowerCase()}.png`}
            alt="userAccount"
            className="w-12 rounded-full"
            onClick={() => dispatch(setMenu(!isMenuOpen))}
            title={userDetails?.display_name}
          />
        )}
        {isMenuOpen && (
          <div className="flex flex-col bg-[#121212] text-[#B3B3B3] border border-solid border-[#383838] gap-2 absolute right-[-8px] laptop:right-0">
            {topNav.map((nav) => (
              //
              <Link
                to={topNavLinks[nav?.title]}
                key={nav?.id}
                className={
                  topActiveItems[topActiveItem] == nav?.title
                    ? "text-white font-[700] px-10 py-2 hover:bg-[#383838]"
                    : "px-10 py-2 font-[700] hover:bg-[#383838]"
                }
                onClick={() => {
                  dispatch(setMenu(!isMenuOpen));
                }}
              >
                {nav?.title}
              </Link>
            ))}

            <span
              className="px-10 py-2 font-[700] hover:bg-[#383838]"
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
