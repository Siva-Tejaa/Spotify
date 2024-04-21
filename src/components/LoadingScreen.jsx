import React from "react";

const LoadingScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[100svh] bg-[#212121] text-white">
      <span className="loader"></span>
    </div>
  );
};

export default LoadingScreen;
