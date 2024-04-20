import React from "react";
import { MdLibraryMusic } from "react-icons/md";
import { library } from "../utils/constants/constants";

const LeftContentLibrary = () => {
  return (
    <section className="bg-[#121212] p-2 rounded-md flex flex-col gap-4">
      <div className="flex items-center p-3 gap-2 font-[700] text-[16px] text-white">
        <MdLibraryMusic fontSize="1.4em" /> Library
      </div>

      {/* If there is no Playlist */}
      {library.map((library) => (
        <div
          className="bg-[#242424] p-4 rounded-md flex flex-col gap-2"
          key={library?.id}
        >
          <p className="font-[700] text-white text-[16px]">{library?.title}</p>
          <p>{library?.subtitle}</p>
          <button className="font-[700] text-black text-[16px] p-2 mt-2 bg-white rounded-sm">
            {library?.button}
          </button>
        </div>
      ))}
      {/* If there is no Playlist */}
    </section>
  );
};

export default LeftContentLibrary;
