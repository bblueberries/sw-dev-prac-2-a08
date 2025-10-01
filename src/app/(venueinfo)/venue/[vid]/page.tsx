// "use client";

import { notFound } from "next/navigation";

// ✅ Mock data
const venues = [
  { vid: "001", name: "The Bloom Pavilion", img: "/image/bloom.jpg" },
  { vid: "002", name: "Spark Space", img: "/image/sparkspace.jpg" },
  { vid: "003", name: "The Grand Table", img: "/image/grandtable.jpg" },
];

// ⚡ Async function so we can await params
export default async function VenueDetail({
  params,
}: {
  params: Promise<{ vid: string }>;
}) {
  const { vid } = await params;

  const venue = venues.find((v) => v.vid === vid);

  if (!venue) return notFound();

  return (
    <div className="p-6 flex justify-center items-center min-h-screen">
      <div className="flex items-center gap-6 bg-white p-6 rounded-lg shadow-md">
        {/* Image on the left */}
        <img
          src={venue.img}
          alt={venue.name}
          className="rounded-lg shadow-md w-72 h-auto object-cover"
        />

        {/* Name on the right */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{venue.name}</h1>
          <p className="text-gray-700">Venue ID: {venue.vid}</p>
        </div>
      </div>
    </div>
  );
}
