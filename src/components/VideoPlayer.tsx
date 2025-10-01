"use client";
import React, { useEffect, useRef } from "react";

interface VideoPlayerProps {
  vdoSrc: string;
  isPlaying: boolean;
}

export default function VideoPlayer({ vdoSrc, isPlaying }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        const playPromise = videoRef.current.play();
        if (playPromise instanceof Promise) {
          playPromise.catch((err) => console.log("Play error:", err));
        }
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <video
      ref={videoRef}
      src={vdoSrc}
      data-testid="video-element"
      className="rounded-lg shadow-md w-full"
    />
  );
}
