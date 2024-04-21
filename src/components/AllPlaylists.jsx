import React from "react";

import { Link } from "react-router-dom";

const AllPlaylists = ({ listTitle, playlists }) => {
  return (
    <section className="flex flex-col gap-2">
      <div className="font-[700] text-[24px] hover:underline">{listTitle}</div>
      <div className="flex overflow-auto justify-between gap-4 slider">
        {playlists.map((list) => (
          <Link
            to={`/playlist/${list?.playListId}`}
            key={list?.title}
            className="flex flex-col gap-2 p-2 hover:bg-[#333333] rounded-md"
          >
            <img
              src={list?.image}
              className="min-w-36 rounded-sm laptop:min-w-40"
            />
            <p className="font-[500] ">{list?.title}</p>
            <p className="text-[#919191] font-[400] playlist-desc">
              {list?.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default AllPlaylists;
