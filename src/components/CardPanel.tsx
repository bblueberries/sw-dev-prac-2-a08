"use client";
import { useState } from "react";
import Card from "./Card";
import Link from "next/link";

const venues = [
  { vid: "001", name: "The Bloom Pavilion", img: "/image/bloom.jpg" },
  { vid: "002", name: "Spark Space", img: "/image/sparkspace.jpg" },
  { vid: "003", name: "The Grand Table", img: "/image/grandtable.jpg" },
];

export default function CardPanel() {
  const [ratings, setRatings] = useState<Record<string, number>>(
    Object.fromEntries(venues.map((v) => [v.vid, 0]))
  );

  const [hidden, setHidden] = useState<Set<string>>(new Set());

  const handleRate = (vid: string, value: number) => {
    setRatings((prev) => ({ ...prev, [vid]: value }));
    setHidden((prev) => {
      const copy = new Set(prev);
      copy.delete(vid);
      return copy;
    });
  };

  const handleRemoveFromList = (vid: string) => {
    setHidden((prev) => new Set([...prev, vid]));
  };

  const activeList = venues
    .map((v) => [v, ratings[v.vid]] as [(typeof venues)[number], number])
    .filter(([v]) => !hidden.has(v.vid));

  return (
    <div>
      {/* Card grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {venues.map(({ vid, name, img }) => (
          <Card
            key={vid}
            vid={vid}
            venueName={name}
            imgSrc={img}
            rating={ratings[vid]}
            onRate={(val) => handleRate(vid, val)}
          />
        ))}
      </div>

      {/* Ratings summary */}
      <div className="p-6 space-y-2 bg-gray-50 rounded-lg shadow-sm">
        <div className="font-semibold text-gray-900">
          Venue List with Ratings : {activeList.length}
        </div>
        {activeList.map(([v, rate]) => (
          <div
            key={v.vid}
            data-testid={v.vid}
            className="text-gray-800 font-medium cursor-pointer hover:text-red-500"
            onClick={() => handleRemoveFromList(v.vid)}
          >
            {v.name} : {rate}
          </div>
        ))}
      </div>
    </div>
  );
}
