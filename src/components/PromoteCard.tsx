"use client";

import React, { useState } from "react";
import VideoPlayer from "./VideoPlayer";
import useWindowListener from "@/hooks/useWindowListener";

export default function PromoteCard() {
  const [isPlaying, setIsPlaying] = useState(true);

  // prevent right-click context menu on window
  useWindowListener("contextmenu", (e: Event) => {
    e.preventDefault();
  });

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl overflow-hidden p-4 space-y-4">
      <VideoPlayer vdoSrc="/vdo/venue.mp4" isPlaying={isPlaying} />

      <p className="text-gray-700">Book your venue today.</p>

      <button
        onClick={() => setIsPlaying((prev) => !prev)}
        className={`px-4 py-2 rounded-lg text-white font-semibold ${
          isPlaying
            ? "bg-red-500 hover:bg-red-600"
            : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
}
