import React from "react";

import { useSelector } from "react-redux";

const Tracks = () => {
  const { tracks } = useSelector((state) => state?.playList?.playListDetails);

  return (
    <div className="p-4">
      {/* {console.log(tracks)} */}
      <p>Tracks</p>
      <table>
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
              <td className="flex items-center gap-1">
                <img
                  src={item?.track?.album?.images[0]?.url}
                  className="w-10 rounded-sm"
                  alt="Track Image"
                />
                {item?.track?.name}
              </td>
              <td>{item?.track?.album?.name}</td>
              <td>{item?.added_at}</td>
              <td>{item?.track?.duration_ms}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tracks;
