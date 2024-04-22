import React, { useEffect } from "react";

//Router
import { useParams } from "react-router-dom";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { getApiData } from "../redux/features/fetchApiSlice";

//API
import { GET_PLAYLIST } from "../utils/api/api";
import LoadingScreen from "./LoadingScreen";
import { setPlayList } from "../redux/features/playListSlice";

const PlayListItems = () => {
  const { playlistid } = useParams();

  const { accessToken } = useSelector((state) => state.token);
  const { status, data, error } = useSelector((state) => state.getApi);

  //   const { playListDetails } = useSelector((state) => state.playlist);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getApiData({ url: GET_PLAYLIST + playlistid, authToken: accessToken })
    );
  }, []);

  useEffect(() => {
    if (data?.description) {
      dispatch(setPlayList(data)); // Assuming `data` contains the entire playlist details
    }
  }, [data]);

  useEffect(() => {
    if (data?.error && data.error.status === 401) {
      logoutHandler();
    }
  }, [status, data]);

  return (
    <>
      {/* //Loading Status */}
      {status == "loading" && <LoadingScreen />}

      <p>Data Loaded Successfully</p>
      {/* {console.log(playListDetails)} */}

      {/* //Error Status */}
      {status == "error" && data?.error?.status == 401 && (
        <p className="font-bold text-xl">
          Something Went Wrong...Please Try Again
        </p>
      )}
    </>
  );
};

export default PlayListItems;
