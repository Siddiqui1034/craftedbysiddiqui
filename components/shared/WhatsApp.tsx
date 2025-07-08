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
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 bg-green-500 rounded-full pl-3 pr-3 py-2 shadow-lg fixed right-[30px] lg:right-[16px] transition-all duration-300 hover:scale-105 group z-50"
      style={{ bottom: `${bottom}px` }}
      title="Chat on WhatsApp"
    >
      
      <FontAwesomeIcon icon={faWhatsapp} className="text-white text-xl" />
      <span className="hidden lg:inline text-white font-medium">Chat with me</span>
    </a>
  );
};

export default WhatsApp;


// import { WhatsAppOutlined } from "@ant-design/icons";
// import Link from "next/link";
// import React, { FC } from "react";

// interface WhatsAppInterface{
//     bottom: number
// }

// const WhatsApp: FC<WhatsAppInterface> = ({bottom}) => {
//   const phoneNumber = '8765869040'
//   const message = "Hello Nausheen, I visited your portfolio and would like to connect"
//   const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  
//   return (
//     <Link
//         href={waLink}
//         title="Chat on WhatsApp" 
//         className="flex items-center gap-2 bg-green-500 rounded-full pl-3 pr-4 py-2 shadow-lg fixed right-[50px] transition-all duration-300 hover:scale-105 group" 
//         style={{position: 'fixed', right: '50px', bottom: `${bottom}px`}}
//     >
//         <WhatsAppOutlined className="!text-3xl !font-bold !text-white" />
//         <span className="hidden md:inline text-white font-medium">Chat with me</span>
//     </Link>
//   );
// };

// export default WhatsApp;
