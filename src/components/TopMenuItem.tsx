"use client";

import Link from "next/link";

type TopMenuItemProps = {
  label: string;
  href: string;
};

export default function TopMenuItem({ label, href }: TopMenuItemProps) {
  return (
    <Link
      href={href}
      className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium"
    >
      {label}
    </Link>
  );
}
