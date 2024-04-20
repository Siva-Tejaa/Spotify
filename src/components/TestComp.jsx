import React, { useEffect } from "react";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { getApiData } from "../redux/features/fetchApiSlice";

const TestComp = () => {
  const { status, data, error } = useSelector((state) => state.getApi);

  const { accessToken } = useSelector((state) => state.token);

  const dispatch = useDispatch();

  console.log(status);

  useEffect(() => {
    const url = "https://api.spotify.com/v1/browse/featured-playlists";
    const authToken = accessToken;

    dispatch(getApiData({ url, authToken }));
  }, []);
  return (
    <div className="flex items-center justify-center">
      {status == "loading" && <p className="font-bold text-3xl">Loading...</p>}
      {status == "idle" && (
        <div>
          <p>Api Fetched</p>
          <p>{JSON.stringify(data)}</p>
        </div>
      )}
      {status == "error" && (
        <p className="font-bold text-xl">
          Something Went Wrong...Please Try Again
        </p>
      )}
    </div>
  );
};

export default TestComp;
