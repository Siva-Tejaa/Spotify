import React, { useEffect, useRef } from "react";

import { useSelector } from "react-redux";

const AudioPlayer = () => {
  const audioRef = useRef();

  const { audioTrack, audioTitle } = useSelector((state) => state.audio);

  useEffect(() => {
    // console.log(audioRef);
    if (
      audioTrack &&
      audioRef.current.paused &&
      audioRef.current.currentTime >= 0 &&
      !audioRef.current.started
    ) {
      audioRef.current.play();
    } else {
    }
  }, [audioTrack]);
  return (
    <div className="bg-[#121212] text-white p-2 flex flex-col gap-1 items-center justify-center fixed bottom-0 left-0 right-0 ">
      {/* {console.log(audioTrack)} */}
      <p>{audioTitle}</p>
      <audio controls ref={audioRef} src={audioTrack}></audio>
    </div>
  );
};

export default AudioPlayer;
