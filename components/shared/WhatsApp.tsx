"use client";
import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

interface WhatsAppInterface {
  bottom: number;
}

const WhatsApp: FC<WhatsAppInterface> = ({ bottom }) => {
  const phoneNumber = "917376147918"; // Replace with your WhatsApp number
  const message = "Hello Nausheen, I visited your portfolio and would like to connect.";
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
<div
      style={{ bottom: `${bottom}px` }}
      className="fixed right-[50px] md:right-[20px] z-50"
    >
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group bg-green-500 rounded-full w-[50px] h-[50px] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        title="Chat on WhatsApp"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="text-white text-xl" />

        {/* Tooltip */}
        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300">
          <div className="bg-black text-white text-xs px-3 py-1 rounded-md whitespace-nowrap shadow-lg">
            Chat with me
          </div>
          <div className="w-2 h-2 bg-black rotate-45 absolute top-full left-1/2 -translate-x-1/2"></div>
        </div>
      </a>
    </div>


  );
};

export default WhatsApp;
