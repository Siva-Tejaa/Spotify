import React from "react";
import { sideNav } from "../utils/constants/constants";

import { Link } from "react-router-dom";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { closeMenu } from "../redux/features/menuSlice";

const LeftContentNav = () => {
  const { topActiveItem } = useSelector((state) => state.menu);

  const dispatch = useDispatch();

  const activeItems = {
    Home: "Home",
    Search: "Search",
  };

  const navLinks = {
    Home: "/home",
    Search: "/search",
  };

  return (
    <nav className="bg-[#121212] p-2 rounded-md flex flex-col gap-4">
      {sideNav.map((nav) => (
        <Link
          to={navLinks[nav?.title]}
          key={nav?.id}
          className={
            activeItems[nav?.title] == topActiveItem
              ? "flex items-center p-3 gap-2 font-[700] text-[16px] text-white rounded-sm hover:bg-[#383838]"
              : "flex items-center p-3 gap-2 font-[700] text-[16px] rounded-sm hover:bg-[#383838]"
          }
          onClick={() => dispatch(closeMenu())}
        >
          {nav.icon} {nav?.title}
        </Link>
      ))}
    </nav>
  );
};

export default LeftContentNav;
