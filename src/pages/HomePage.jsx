import React, { useEffect } from "react";
import Header from "../components/Header";

import TestComp from "../components/TestComp";
import LeftContent from "../components/LeftContent";
import RightContent from "../components/RightContent";

const HomePage = () => {
  return (
    <>
      <Header />
      <main className="bg-[#000000] text-white p-4">
        <section className="flex flex-col items-center gap-4 laptop:flex-row laptop:items-start">
          <LeftContent />
          <RightContent />
        </section>
      </main>
    </>
  );
};

export default HomePage;
