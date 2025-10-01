"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const images = [
  "/img/cover.jpg",
  "/img/cover2.jpg",
  "/img/cover3.jpg",
  "/img/cover4.jpg",
];

export default function Banner() {
  const [index, setIndex] = useState(0);
  const router = useRouter();

  const handleClick = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const handleSelectVenue = () => {
    router.push("/venue");
  };

  return (
    <div className="relative w-full h-[400px]">
      {/* Banner Image */}
      <img
        src={images[index]}
        alt="Banner"
        className="w-full h-full object-cover cursor-pointer"
        onClick={handleClick}
      />

      <button
        onClick={handleSelectVenue}
        className="absolute bottom-3 right-4 translate-y-full mt-2 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Select Venue
      </button>
    </div>
  );
}
