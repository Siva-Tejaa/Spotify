import React, { useEffect } from "react";
import "./App.css";

//Pages
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

//React Router Dom
import { Routes, Route, Navigate } from "react-router-dom";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { testLogin } from "./redux/features/userSlice";

const App = () => {
  const userAuthentication = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const AuthenticatedRoute = ({ children }) => {
    return userAuthentication?.isLoggedIn ? children : <Navigate to="/" />;
  };

  const LoginRedirect = ({ children }) => {
    return userAuthentication?.isLoggedIn ? <Navigate to="/home" /> : children;
  };

  useEffect(() => {
    const isBrowserLogin = localStorage.getItem("isLoggedIn");
    if (isBrowserLogin == true) {
      dispatch(testLogin());
    }
  }, []);

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
      <Route
        exact
        path="/home"
        element={
          <AuthenticatedRoute>
            <HomePage />
          </AuthenticatedRoute>
        }
      />
    </Routes>
  );
};

export default App;
