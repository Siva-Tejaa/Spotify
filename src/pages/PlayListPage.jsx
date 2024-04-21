import React from "react";

import { useParams } from "react-router-dom";
import Header from "../components/Header";

const PlayListPage = () => {
  const { playlistid } = useParams();
  return (
    <section>
      <Header />
      <p>PlayList Details</p>
      <p>PlayList ID : {playlistid}</p>
    </section>
  );
};

export default PlayListPage;
