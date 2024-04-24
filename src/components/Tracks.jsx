import React from "react";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { setAudioTrack } from "../redux/features/audioSlice";

const Tracks = () => {
  const { tracks } = useSelector((state) => state?.playList?.playListDetails);

  const dispatch = useDispatch();

  const formatDuration = (duration) => {
    // Convert milliseconds to seconds
    var totalSeconds = Math.floor(duration / 1000);

    // Calculate minutes and seconds
    var minutes = Math.floor(totalSeconds / 60);
    var seconds = totalSeconds % 60;

    // Format the duration as "MM:SS"
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };

  return (
    <div className="p-4">
      {/* {console.log(tracks)} */}
      <p>Tracks</p>
      <table className="text-sm">
        <thead>
          <th>#</th>
          <th>Title</th>
          <th>Album</th>
          <th>Date Added</th>
          <th>Duration</th>
        </thead>
        <tbody>
          {tracks?.items?.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td
                className="flex items-center gap-1 cursor-pointer"
                onClick={() =>
                  dispatch(
                    setAudioTrack({
                      track: item?.track?.preview_url,
                      name: item?.track?.name,
                    })
                  )
                }
              >
                <img
                  src={item?.track?.album?.images[0]?.url}
                  className="w-10 rounded-sm"
                  alt="Track Image"
                />
                <div className="flex flex-col">
                  <p>{item?.track?.name}</p>
                  <p className="text-xs text-[#A7A7A7]">
                    {item?.track?.artists[0]?.name}
                  </p>
                </div>
              </td>
              <td>{item?.track?.album?.name}</td>
              <td>{moment(item?.added_at, "YYYYMMDD").fromNow()}</td>
              <td>{formatDuration(item?.track?.duration_ms)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tracks;
