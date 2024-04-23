import React from "react";

import { useSelector } from "react-redux";

import Tracks from "../components/Tracks";

const PlayLists = () => {
  const { playListDetails } = useSelector((state) => state?.playList);

  return (
    <div className="flex flex-col gap-2 bg-[#212121]">
      {playListDetails?.description && (
        <div className=" p-4 rounded-md w-[100%] flex flex-col gap-1 laptop:w-[70%]">
          <div className="flex items-center gap-6">
            {playListDetails?.images && (
              <img
                src={playListDetails.images[0]?.url}
                className="w-36 rounded-sm laptop:w-40"
              />
            )}
            <div className="flex flex-col gap-1">
              <p className="font-[900] text-[20px] laptop:text-[32px]">
                {playListDetails?.name}
              </p>
              <p
                className="playlist-desc text-sm text-[#A7A7A7] laptop:text-base"
                dangerouslySetInnerHTML={{
                  __html: playListDetails?.description,
                }}
              ></p>
              <p className="text-xs text-[#A7A7A7] laptop:text-sm">
                {"#" + playListDetails?.type}
              </p>
              <div>
                <p className="text-sm text-[#A7A7A7] laptop:text-base">
                  {playListDetails?.owner?.display_name} •{" "}
                  {playListDetails?.followers?.total.toLocaleString() +
                    " followers"}{" "}
                  • {playListDetails?.tracks?.items?.length + " songs"}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <hr />

      <Tracks />
    </div>
  );
};

export default PlayLists;
