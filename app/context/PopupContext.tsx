"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type PopupContextType = {
  popup: string | null;
  openPopup: (id: string) => void;
  closePopup: () => void;
};

const PopupContext = createContext<PopupContextType | undefined>(undefined);

export function PopupProvider({ children }: { children: React.ReactNode }) {
  const [popup, setPopup] = useState<string | null>(null);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("newsletterDismissed");
    if (!dismissed) {
      setPopup("newsletter");
    }
    setInitialized(true);
  }, []);

  if (!initialized) return null;

  function openPopup(id: string) {
    setPopup(id);
  }

  function closePopup() {
    setPopup(null);
  }

  return (
    <PopupContext.Provider value={{ popup, openPopup, closePopup }}>
      {children}
    </PopupContext.Provider>
  );
}

export function usePopup() {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error("usePopup must be used within PopupProvider");
  }
  return context;
}
