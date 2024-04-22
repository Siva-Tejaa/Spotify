import React from "react";

const AudioPlayer = () => {
  return (
    <div className="bg-[#121212] text-white p-2 flex items-center justify-center fixed bottom-0 left-0 right-0 ">
      <audio controls></audio>
    </div>
  );
};

export default AudioPlayer;
