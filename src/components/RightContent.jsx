import React from "react";
import AllPlaylists from "./AllPlaylists";

import {
  featuredCharts,
  theSoundOfSpotifyPlaces,
} from "../utils/constants/constants";

//React Icons
import { GrInstallOption } from "react-icons/gr";
import { IoNotifications } from "react-icons/io5";
import FeaturedPlaylist from "./FeaturedPlaylist";

const RightContent = () => {
  return (
    <section className="bg-[#212121] p-4 rounded-md w-[100%] flex flex-col gap-1 laptop:w-[70%]">
      <div className="flex items-center justify-end gap-6">
        <p className="py-1 px-2 bg-white text-black rounded-full font-[700] text-[13px] laptop:text-[16px]">
          Explore Premium
        </p>
        <a
          href="https://www.spotify.com/in-en/download/windows/"
          target="_blank"
          className="flex items-center gap-2 py-1 px-2 bg-black rounded-full font-[700] text-[13px] laptop:text-[16px]"
        >
          <GrInstallOption /> Install App
        </a>
        <p className="bg-black rounded-full p-2">
          <IoNotifications />
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <FeaturedPlaylist />
        <AllPlaylists listTitle="Top Trending" playlists={featuredCharts} />
        <AllPlaylists
          listTitle="The Sound Of Spotify Places"
          playlists={theSoundOfSpotifyPlaces}
        />
      </div>
    </section>
  );
};

export default RightContent;
