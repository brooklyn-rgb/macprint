// app/components/SubscribeButton.tsx
"use client";

import { useEffect } from "react";
import { usePopup } from "../../context/PopupContext";

type Props = {
  hasSubscribed: boolean;
};

export default function SubscribeButton({ hasSubscribed }: Props) {
  const { openPopup } = usePopup();

  useEffect(() => {
    if (!hasSubscribed) {
      const timer = setTimeout(() => {
        openPopup("newsletter");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [hasSubscribed, openPopup]);

  return null; // No visible button, purely logic-driven
}
