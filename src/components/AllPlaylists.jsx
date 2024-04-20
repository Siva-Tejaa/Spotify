import React from "react";
import { featuredCharts } from "../utils/constants/constants";

const AllPlaylists = () => {
  return (
    <section className="flex flex-col gap-3">
      <div className="font-[700] text-[24px] hover:underline">
        Featured Playlists
      </div>
      <div className="flex flex-wrap justify-between gap-4">
        {featuredCharts.map((list) => (
          <div key={list?.title}>
            <img src={list?.image} className="w-40" />
            <p>{list?.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllPlaylists;
