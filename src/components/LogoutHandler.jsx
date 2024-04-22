import { setMenu } from "../redux/features/menuSlice";
import { settopActiveItem } from "../redux/features/menuSlice";
import { clearAccessToken } from "../redux/features/accessTokenSlice";

import { useDispatch } from "react-redux";

export const useLogoutHandler = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(setMenu());
    dispatch(settopActiveItem(""));
    dispatch(clearAccessToken());
  };

  return logoutHandler;
};
