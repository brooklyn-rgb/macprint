"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export default function GlobalPopup() {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);
  const popupCount = useRef(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const MAX_POPUPS = 3;

  const startPopupInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (popupCount.current < MAX_POPUPS) {
        setVisible(true);
        setClosing(false);
        popupCount.current += 1;
      } else {
        clearInterval(intervalRef.current!);
      }
    }, 10 * 600 * 10000); // every 2 mins
  };

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setVisible(false);
      startPopupInterval();
    }, 300);
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setVisible(true);
      popupCount.current += 1;
    }, 10 * 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 bg-amber-50/80 bg-no-repeat flex justify-center items-center z-50 transition-opacity duration-300 ${
        closing ? "animate-fadeOut" : "opacity-100"
      }`}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`relative w-[400px] rounded-lg overflow-hidden shadow-2xl animate-bounceInDance ${
          !closing && "animate-floatLoop"
        }`}
      >
        <div className="absolute inset-0 z-10 bg-[#FF5733]" />
        <div className="relative z-20 text-[#0ca4e1] font-extrabold text-center p-6 bg-[url(/bna.png)] bg-cover bg-no-repeat">

        <div className="flex justify-end mt-4">
            <button
              onClick={handleClose}
              className="text-lg bg-[rgb(255,255,255)] font-bold px-4 py-2 rounded-lg hover:bg-[#adbebc] hover:text-[#ffffff] text-[rgb(225,37,12)] hover:text-[#ffffff] transition-transform hover:scale-95"
            >
              X
            </button>
          </div>

          <h2 className="text-2xl text-white font-extrabold mb-4 tracking-wide uppercase animate-pulse">
            🚀 Branding – To Secure Your Future!
          </h2>
          <p className="mb-1">MacPrinters</p>
          <p className="mb-1 text-white"></p>
          <p className="mb-1">📚 Order Now!</p>
          <p className="mb-4 text-white"></p>
          
          <Link href="/">
          <button 
          onClick={handleClose}
          className="w-full bg-[#00675B] text-white font-semibold py-2 rounded-md hover:bg-[#abcac7] hover:text-[#901a1a] transition transform hover:scale-105">
            Order Now!
          </button>
          </Link>
          <div className="flex justify-beginning mt-4">
            <button
              onClick={handleClose}
              className="text-sm bg-[rgb(255,255,255)] opacity-60 font-bold px-4 py-2 rounded-lg hover:bg-[#b4c7c5] hover:text-[#fdfdfd] text-[#901a1a] underline hover:text-white transition-transform hover:scale-95"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
