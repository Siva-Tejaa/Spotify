import React from "react";

import { useParams } from "react-router-dom";
import Header from "../components/Header";
import LeftContent from "../components/LeftContent";
import AudioPlayer from "../components/AudioPlayer";
import PlayListItems from "../components/PlayListItems";

const PlayListPage = () => {
  return (
    <>
      <Header />
      <main className="bg-[#000000] text-white p-[5px] mb-16 laptop:p-4">
        <section className="flex flex-col items-center gap-4 laptop:flex-row laptop:items-start">
          <LeftContent />
          <PlayListItems />
        </section>
      </main>
      <AudioPlayer />
    </>
  );
};

export default PlayListPage;
