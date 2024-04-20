import React, { useEffect } from "react";

//Router
import { useNavigate } from "react-router-dom";

//Redux
import { useDispatch } from "react-redux";
import { setAccessToken } from "../redux/features/accessTokenSlice";

const CallbackPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getAccessTokenFromUrl = () => {
    const urlAccessToken = new URLSearchParams(
      window.location.hash.substring(1)
    ).get("access_token");

    if (urlAccessToken) {
      dispatch(setAccessToken(urlAccessToken));
      navigate("/home");
    } else {
      return navigate("/");
    }
  };

  useEffect(() => {
    getAccessTokenFromUrl();
  }, []);

  return (
    <>
      <div className="flex items-center justify-center">Logging in...</div>
    </>
  );
};

export default CallbackPage;
