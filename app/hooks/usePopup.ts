"use client";

import { useEffect, useState } from "react";

export function usePopup(initialDelay: number = 0) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), initialDelay);
    return () => clearTimeout(timer);
  }, [initialDelay]);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return { isOpen, open, close };
}
