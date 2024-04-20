import React, { useEffect } from "react";
import "./App.css";

//Pages
import LoginPage from "./pages/LoginPage";
import CallbackPage from "./pages/CallbackPage";
import HomePage from "./pages/HomePage";

//React Router Dom
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { setAccessToken } from "./redux/features/accessTokenSlice";
import AccountPage from "./pages/AccountPage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import { settopActiveItem } from "./redux/features/menuSlice";
import SearchPage from "./pages/SearchPage";

const App = () => {
  const { accessToken, isLoggedIn } = useSelector((state) => state.token);
  const dispatch = useDispatch();

  const page = useLocation();

  const AuthenticatedRoute = ({ children }) => {
    return isLoggedIn ? children : <Navigate to="/" />;
  };

  const LoginRedirect = ({ children }) => {
    return isLoggedIn ? <Navigate to="/home" /> : children;
  };

  useEffect(() => {
    const browserAccessToken = localStorage.getItem("access_token");
    if (browserAccessToken) {
      dispatch(setAccessToken(browserAccessToken));
    }

    //For Setting Active Item
    dispatch(
      settopActiveItem(
        page?.pathname.slice(1, 2).toUpperCase() + page?.pathname?.slice(2)
      )
    );
  }, [page]);

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <LoginRedirect>
            <LoginPage />
          </LoginRedirect>
        }
      />
      <Route exact path="/callback" element={<CallbackPage />} />
      <Route
        exact
        path="/home"
        element={
          <AuthenticatedRoute>
            <HomePage />
          </AuthenticatedRoute>
        }
      />
      <Route
        exact
        path="/account"
        element={
          <AuthenticatedRoute>
            <AccountPage />
          </AuthenticatedRoute>
        }
      />
      <Route
        exact
        path="/profile"
        element={
          <AuthenticatedRoute>
            <ProfilePage />
          </AuthenticatedRoute>
        }
      />
      <Route
        exact
        path="/settings"
        element={
          <AuthenticatedRoute>
            <SettingsPage />
          </AuthenticatedRoute>
        }
      />
      <Route
        exact
        path="/search"
        element={
          <AuthenticatedRoute>
            <SearchPage />
          </AuthenticatedRoute>
        }
      />
    </Routes>
  );
};

export default App;
