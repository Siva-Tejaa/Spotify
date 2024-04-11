import React, { useEffect } from "react";
import Header from "../components/Header";

import TestComp from "../components/TestComp";

const HomePage = () => {
  return (
    <>
      <Header />
      <p>Im from Home Page</p>
      <p>Im Accessible Only After Authentication</p>
      <TestComp />
    </>
  );
};

export default HomePage;
