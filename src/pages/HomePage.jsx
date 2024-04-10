import React from "react";
import Header from "../components/Header";

const HomePage = () => {
  return (
    <>
      <Header />
      <p>Im from Home Page</p>
      <p>Im Accessible Only After Authentication</p>
    </>
  );
};

export default HomePage;
