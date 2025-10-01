"use client";

import { ReactNode, KeyboardEvent, useState } from "react";

type InteractiveCardProps = {
  children: ReactNode;
  onClick?: () => void;
};

export default function InteractiveCard({
  children,
  onClick,
}: InteractiveCardProps) {
  const [hovered, setHovered] = useState(false);

  const handleKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!onClick) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div
      role="region"
      tabIndex={onClick ? 0 : -1}
      onClick={onClick}
      onKeyDown={handleKey}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={[
        "max-w-sm",
        "rounded-lg",
        "overflow-hidden",
        "transition",
        "duration-300",
        hovered ? "shadow-2xl bg-neutral-200" : "shadow-lg bg-white",
      ].join(" ")}
    >
      {children}
    </div>
  );
}
