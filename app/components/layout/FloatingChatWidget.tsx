"use client";

import React, { useState } from "react";
import { Platform } from "../../../types/platform";
import { MessageSquareIcon, X } from "lucide-react";
import { FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";

type Props = {
  platforms?: Platform[]; // Made optional with default value
};

const FloatingChatWidget: React.FC<Props> = ({ 
  platforms: propPlatforms = [] // Default empty array
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Default platforms if none provided
  const defaultPlatforms: Platform[] = [
    {
      name: "WhatsApp",
      url: "https://wa.me/27831234567",
      color: "#25D366",
      icon: FaWhatsapp as React.ComponentType<React.SVGProps<SVGSVGElement>>,
      ariaLabel: "Chat with us on WhatsApp",
    },
  ];

  // Use provided platforms or default ones
  const platforms = propPlatforms.length > 0 ? propPlatforms : defaultPlatforms;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle Chat Options"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#00897B] text-white shadow-lg hover:scale-110 transition duration-300"
      >
        {isOpen ? <X size={24} /> : <MessageSquareIcon size={24} />}
      </button>

      {/* Social Buttons */}
      <div
        className={`flex flex-col gap-2 transition-all duration-300 ease-in-out ${
          isOpen 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {platforms.map((platform, index) => {
          const Icon = platform.icon;
          return (
            <a
              key={index}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={platform.ariaLabel || platform.name}
              className="w-12 h-12 rounded-full shadow-md flex items-center justify-center hover:scale-110 transition duration-300"
              style={{ backgroundColor: platform.color }}
            >
              <Icon size={24} color="#fff" />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default FloatingChatWidget;