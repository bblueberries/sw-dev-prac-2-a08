"use client";

import { useEffect } from "react";

export default function useWindowListener(
  eventType: string,
  listener: EventListenerOrEventListenerObject
) {
  useEffect(() => {
    window.addEventListener(eventType, listener);

    return () => {
      window.removeEventListener(eventType, listener);
    };
  }, [eventType, listener]);
}
