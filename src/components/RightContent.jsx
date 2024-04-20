import React from "react";
import AllPlaylists from "./AllPlaylists";

//React Icons
import { GrInstallOption } from "react-icons/gr";
import { IoNotifications } from "react-icons/io5";

const RightContent = () => {
  return (
    <section className="bg-[#212121] p-4 rounded-md w-[100%] flex flex-col gap-1 laptop:w-[70%]">
      <div className="flex items-center justify-end gap-6">
        <p className="py-1 px-2 bg-white text-black rounded-full font-[700]">
          Explore Premium
        </p>
        <p className="flex items-center gap-2 py-1 px-2 bg-black rounded-full font-[700]">
          <GrInstallOption /> Install App
        </p>
        <p className="bg-black rounded-full p-2">
          <IoNotifications />
        </p>
      </div>
      <AllPlaylists />
    </section>
  );
};

export default RightContent;
