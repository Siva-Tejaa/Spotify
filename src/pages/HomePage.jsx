import React, { useEffect } from "react";
import Header from "../components/Header";

import TestComp from "../components/TestComp";
import LeftContent from "../components/LeftContent";
import RightContent from "../components/RightContent";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { getApiData } from "../redux/features/fetchApiSlice";
// import { setMenu, settopActiveItem } from "../redux/features/menuSlice";
// import { clearAccessToken } from "../redux/features/accessTokenSlice";
import { userData } from "../redux/features/userSlice";

import LoadingScreen from "../components/LoadingScreen";
import { CURRENT_USER_PROFILE } from "../utils/api/api";
import AudioPlayer from "../components/AudioPlayer";

//Logout Handler
import { useLogoutHandler } from "../components/LogoutHandler";

const HomePage = () => {
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
    dispatch(getApiData({ url: CURRENT_USER_PROFILE, authToken: accessToken }));
  }, [accessToken]);

  useEffect(() => {
    //Setting User data
    if (data?.display_name) {
      dispatch(userData(data));
    }
  }, [data]);

  useEffect(() => {
    if (data?.error && data.error.status === 401) {
      logoutHandler();
      // console.log("Logging Out from Home Page");
    }
  }, [status, data]);

  return (
    <>
      <Header />

      {/* //Loading Status */}
      {status == "loading" && <LoadingScreen />}

      {/* //Success Status */}
      {/* {console.log(data)} */}
      {
        <main className="bg-[#000000] text-white p-[5px] mb-[75px] laptop:p-4">
          <section className="flex flex-col items-center gap-4 laptop:flex-row laptop:items-start">
            <LeftContent />
            <RightContent />
          </section>
        </main>
      }
      {/* {console.log(error)} */}
      {/* {console.log(data?.error?.status == 401)} */}
      {/* //Error Status */}
      {status == "error" && data?.error?.status == 401 && (
        <p className="font-bold text-xl">
          Something Went Wrong...Please Try Again
        </p>
      )}
      <AudioPlayer />
    </>
  );
};

export default HomePage;
