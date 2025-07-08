"use client";
import "@ant-design/v5-patch-for-react-19";
import 'animate.css';
import ChildrenInterface from "@/interfaces/childrenInterface";
import React, { FC } from "react";
import Navbar from "./shared/Navbar";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ArrowRightOutlined, WhatsAppOutlined } from "@ant-design/icons";
import LeftSidebar from "./shared/LeftSidebar";
import Footer from "./Footer";
import ScrollBottomtoTop from "./shared/ScrollBottomtoTop";
import Image from "next/image";
import CustomButton from "./shared/CustomButton";
import RightSidebar from "./shared/RightSidebar";

const MainLayout: FC<ChildrenInterface> = ({ children }) => {
  return (
    <AntdRegistry>
      <div className="min-h-screen flex flex-col font-rubik">
        {/* Hero section */}
        <Navbar />

        {/* Main section */}
        <main className={`grid grid-cols-1 
                          xl:grid-cols-[1fr_4fr_0.75fr] xl:pt-[50px]
                          lg:px-[150px] 
                          text-2xl 
                          mx-[20px] mb-[10px]
        `}>
          {/* left aside */}
          <LeftSidebar />
          {/* Children Component */}
          <div className="shadow-lg rounded-lg my-[30px] xl:mx-[20px] p-10">
            {children}
          </div>
          {/* right aside */}
          <div>
            <RightSidebar />         
          </div>
        </main>

        <Footer />
        <ScrollBottomtoTop />
      </div>
    </AntdRegistry>
  );
};

export default MainLayout;
