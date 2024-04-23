import React from "react";

const AudioPlayer = () => {
  return (
    <div className="bg-[#121212] text-white p-2 flex items-center justify-center fixed bottom-0 left-0 right-0 ">
      <audio
        controls
        src={`https://p.scdn.co/mp3-preview/24fda6f80f490338fa572d4bc51131b08823433a?cid=c597e9d865084f29b141c3d36ab79a41`}
      ></audio>
    </div>
  );
};

export default AudioPlayer;
