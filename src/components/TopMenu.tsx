"use client";

import Image from "next/image";
import TopMenuItem from "./TopMenuItem";

export default function TopMenu() {
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 flex items-center h-16">
        <div className="ml-auto flex flex-row-reverse items-center space-x-reverse space-x-6">
          <div className="flex items-center space-x-2">
            <Image src="/image/logo.png" alt="logo" width={40} height={40} />
            {/* <span className="font-bold text-lg">VenueFinder</span> */}
          </div>

          <TopMenuItem label="Booking" href="/booking" />
        </div>
      </div>
    </nav>
  );
}
