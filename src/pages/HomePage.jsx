import React, { useEffect } from "react";
import Header from "../components/Header";

import TestComp from "../components/TestComp";
import LeftContent from "../components/LeftContent";
import RightContent from "../components/RightContent";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { getApiData } from "../redux/features/fetchApiSlice";

const HomePage = () => {
  const { status, data, error } = useSelector((state) => state.getApi);

  const { accessToken } = useSelector((state) => state.token);

  const dispatch = useDispatch();

  useEffect(() => {
    const url = "https://api.spotify.com/v1/browse/featured-playlists";
    const authToken = accessToken;

    dispatch(getApiData({ url, authToken }));
  }, []);

  return (
    <>
      <Header />

      {/* //Loading Status */}
      {status == "loading" && <p className="font-bold text-3xl">Loading...</p>}

      {/* //Success Status */}
      {status == "idle" && (
        <main className="bg-[#000000] text-white p-[5px] laptop:p-4">
          {console.log(data)}
          <section className="flex flex-col items-center gap-4 laptop:flex-row laptop:items-start">
            <LeftContent />
            <RightContent />
          </section>
        </main>
      )}

      {/* //Error Status */}
      {status == "error" && (
        <p className="font-bold text-xl">
          Something Went Wrong...Please Try Again
        </p>
      )}
    </>
  );
};

export default HomePage;
