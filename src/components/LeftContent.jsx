import React from "react";
import LeftContentNav from "./LeftContentNav";
import LeftContentLibrary from "./LeftContentLibrary";

//React Icons

const LeftContent = () => {
  return (
    <aside className="w-[100%] text-[#B3B3B3] flex flex-col gap-2 laptop:w-[30%]">
      <LeftContentNav />
      <LeftContentLibrary />
    </aside>
  );
};

export default LeftContent;
