import React, { useState } from "react";
import SpotifyLogo from "../assets/SpotifyLogo.webp";

//Redux Imports
import { useSelector, useDispatch } from "react-redux";
import { testLogout } from "../redux/features/userSlice";

const Header = () => {
  const userData = useSelector((state) => state.user.name);

  const dispatch = useDispatch();

  const [menu, setMenu] = useState(false);
  const logoutHandler = () => {
    setMenu(!menu);
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
          onClick={() => setMenu(!menu)}
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
