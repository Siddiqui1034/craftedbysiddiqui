import { ArrowUpOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import WhatsApp from "./WhatsApp";

const ScrollBottomtoTop = () => {
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", scroll);
    return () => window.removeEventListener("scroll", scroll);
  }, [visibility]);

  const scroll = () => {
    if (window.scrollY > 300) setVisibility(true);
    else setVisibility(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
  }

  return (
    <>
      {
        visibility && (
        <div onClick={scrollToTop} className="bg-black rounded-full w-[50px] h-[50px] flex items-center justify-center bottom-[20px] right-[50px] fixed">
          <ArrowUpOutlined className="!text-2xl !font-bold !text-white" />
        </div>
      )}

    <WhatsApp bottom={ visibility ? 90 : 20 } />

    </>
  );
};

export default ScrollBottomtoTop;
