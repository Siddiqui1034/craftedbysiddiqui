import { WhatsAppOutlined } from "@ant-design/icons";
import React, { FC } from "react";

interface WhatsAppInterface{
    bottom: number
}

const WhatsApp: FC<WhatsAppInterface> = ({bottom}) => {
  return (
    <div 
        className="bg-green-500 rounded-full w-[50px] h-[50px] flex items-center justify-center " 
        style={{position: 'fixed', right: '50px', bottom: `${bottom}px`}}
    >
        <WhatsAppOutlined className="!text-3xl !font-bold !text-white" />
    </div>
  );
};

export default WhatsApp;
