import React, { useEffect } from "react";

import { Link } from "react-router-dom";

//Api
import { FEATURED_PLAYLISTS } from "../utils/api/api";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { getApiData } from "../redux/features/fetchApiSlice";

// import { setMenu, settopActiveItem } from "../redux/features/menuSlice";
// import { clearAccessToken } from "../redux/features/accessTokenSlice";

import { useLogoutHandler } from "./LogoutHandler";

const FeaturedPlaylist = () => {
  const { status, data, error } = useSelector((state) => state.getApi);

  const { accessToken } = useSelector((state) => state.token);

  const dispatch = useDispatch();

  const logoutHandler = useLogoutHandler();

  // const logoutHandler = () => {
  //   dispatch(setMenu());
  //   dispatch(settopActiveItem(""));
  //   dispatch(clearAccessToken());
  // };

  useEffect(() => {
    dispatch(getApiData({ url: FEATURED_PLAYLISTS, authToken: accessToken }));
  }, [accessToken]);

  useEffect(() => {
    if (data?.error && data?.error?.status === 401) {
      logoutHandler();
      // console.log("Logging Out from Featured Playlists Page");
    }
  }, [status, data]);

  return (
    <section className="flex flex-col gap-2">
      <div className="font-[700] text-[24px] hover:underline">
        Featured Playlists
      </div>
      <div className="flex overflow-auto justify-between gap-4 slider">
        {data?.playlists?.items?.map((list) => (
          <Link
            to={`/playlist/${list?.id}`}
            key={list?.id}
            className="flex flex-col gap-2 p-2 hover:bg-[#333333] rounded-md"
          >
            <img
              src={list?.images[0]?.url}
              className="min-w-36 rounded-sm laptop:min-w-40"
            />
            <p className="font-[500] ">{list?.name}</p>
            <p className="text-[#919191] font-[400] playlist-desc">
              {list?.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedPlaylist;
